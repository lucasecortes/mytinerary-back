const User = require("../models/User");
const crypto = require("crypto");
const bcryptjs = require("bcryptjs");
const sendMail = require("../controllers/sendMail");
const Joi = require("joi");
const jwt = require('jsonwebtoken')

const validator = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z ]+$/)
    .min(3)
    .max(15)
    .required()
    .messages({
      'any.required': 'NAME_REQUIRED',
      'string.empty': 'NAME_REQUIRED',
      'string.min': 'NAME_TOO_SHORT',
      'string.max': 'NAME_TOO_LARGE',
    }),
  lastName: Joi.string()
    .pattern(/^[a-zA-Z ]+$/)
    .min(3)
    .max(15)
    .required()
    .messages({
      'any.required': 'LAST_NAME_REQUIRED',
      'string.empty': 'LAST_NAME_REQUIRED',
      'string.min': 'LAST_NAME_TOO_SHORT',
      'string.max': 'LAST_NAME_TOO_LARGE',
    }),
  mail: Joi.alternatives()
    .try(
      Joi.string()
        .lowercase()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net", "ar", "org"] },
        })
    )
    .required()
    .messages({
      'any.required': 'EMAIL_REQUIRED',
      'string.empty': 'EMAIL_REQUIRED',
      'string.email': 'INVALID_EMAIL'
    })
    .error(new Error("Invalid email")),
  photo: Joi.string().uri().required(),
  country: Joi.string().min(4).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  role: Joi.string().min(3).max(15).required(),
  from: Joi.string().min(3).max(15).required(),
});

const userController = {
  all: async (req, res) => {
    try {
      let users = await User.find();

      res.status(200).json({
        message: "You get users",
        response: users,
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json();
    }
  },

  oneUser: async (req, res) => {
    const { id } = req.params;
    try {
      let user = await User.findOne({ _id: id });
      if (user) {
        res.status(200).json({
          message: "You get one user",
          response: user,
          success: true,
        });
      } else {
        res.status(404).json({
          message: "User not found",
          success: false,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "error",
        success: false,
      });
    }
  },

  signUp: async (req, res) => {
    let { name, photo, password, mail, role, from, country, lastName } =
      req.body;

    try {
      let result = await validator.validateAsync(req.body);
      let user = await User.findOne({ mail });
      if (!user) {
        let loggedIn = false;
        let verified = false;
        let code = crypto.randomBytes(15).toString("hex");

        if (from === "form") {
          password = bcryptjs.hashSync(password, 10);

          user = await new User({
            country,
            lastName,
            name,
            photo,
            mail,
            password: [password],
            role,
            from: [from],
            loggedIn,
            verified,
            code,
          }).save();

          sendMail(mail, code);

          res.status(201).json({
            message: "Thanks for register",
            success: true,
          });
        } else {
          password = bcryptjs.hashSync(password, 10);

          verified = true;

          user = await new User({
            country,
            lastName,
            name,
            photo,
            mail,
            password: [password],
            role: "user",
            from: [from],
            loggedIn,
            verified,
            code,
          }).save();

          res.status(201).json({
            message: "Thanks for register with " + from,
            success: true,
          });
        }
      } else {
        if (user.from.includes(from)) {
          res.status(200).json({
            message: "User already exists",
            success: false,
          });
        } else {
          user.from.push(from);
          user.verified = true;
          user.password.push(bcryptjs.hashSync(password, 10));

          await user.save();
        }
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: error.message,
        success: false,
      });
    }
  },

  verifyMail: async (req, res) => {
    const { code } = req.params;
    try {
      let user = await User.findOne({ code: code });
      if (user) {
        user.verified = true;
        await user.save();
        res.redirect("https://my-tinerary-duco.herokuapp.com/");
      } else {
        res.status(404).json({
          message: "Email has not account yet",
          success: false,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Couldn't verify account",
        success: false,
      });
    }
  },

  verifyToken: async (res, req) => {
    if (req.user !== null) {
      res.status(200).json({
        success: true,
        response: {
          user: req.user
        },
        message: 'Welcome ' + req.user.name + '!'
      })
    } else {
      res.status(401).json({
        success: false,
        message: 'Sign in please'
      })
    }
  },

  signIn: async (req, res) => {
    const { mail, password, from } = req.body;

    try {
      const user = await User.findOne({ mail });
      console.log(mail);
      if (!user) {
        res.status(404).json({
          message: "This user is not registed, please sign up ",
          success: false,
        });
      } else if (user.verified) {
        const checkPass = user.password.filter((passwordElement) =>
          bcryptjs.compareSync(password, passwordElement)
        );

        if (from == "form") {
          if (checkPass.length > 0) {
            const loginUser = {
              id: user._id,
              name: user.name,
              mail: user.mail,
              role: user.role,
              photo: user.photo,
            };

            user.loggedIn = true;
            await user.save();

            const token = jwt.sign({ id: user._id }, process.env.KEY_JWT, { expiresIn: 60 * 60 * 24 })

            res.status(200).json({
              message: "Welcome " + user.name + " " + user.lastName,
              success: true,
              response: { user: loginUser, token: token },
            });
          } else {
            res.status(400).json({
              success: false,
              message: "Username or password incorrect",
            });
          }
        } else {
          if (checkPass.length > 0) {
            const loginUser = {
              id: user._id,
              name: user.name,
              mail: user.mail,
              role: user.role,
              photo: user.photo,
            };

            user.loggedIn = true;
            await user.save();
            const token = jwt.sign({ id: user._id }, process.env.KEY_JWT, { expiresIn: 60 * 60 * 24 })

            res.status(200).json({
              message: "Welcome " + user.name,
              success: true,
              response: { user: loginUser, token: token },
            });
          } else {
            res.status(400).json({
              success: false,
              message: "Credential invalid",
            });
          }
        }
      } else {
        res.status(401).json({
          success: false,
          message: "Please, verify your email account and try again",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: "Sign in error, try again later",
      });
    }
  },

  signOut: async (req, res) => {
    const { _id } = req.body;
    try {
      const user = await User.findOne({ _id });

      user.loggedIn = false;
      await user.save();

      res.status(200).json({
        message: "Good bye sir " + user.name + " " + user.lastName,
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: "Sign out error, try again later",
      });
    }
  },
  updateUser: async (req, res) => {
    const { id } = req.params
    try {
      let user = await User.findOne({ _id: id })
      if (user) {
        await User.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.status(200).json({
          message: 'User updated',
          success: true
        })
      } else {
        res.status(404).json({
          message: 'Could not find user',
          success: false
        })
      }
    } catch (error) {
      console.log(error)
      res.status(400).json({
        message: 'Error',
        success: false
      })
    }
  },

};

module.exports = userController;
