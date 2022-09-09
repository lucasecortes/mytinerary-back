const User = require('../models/User')
const crypto = require('crypto')
const bcryptjs = require('bcryptjs')

const userController = {
    create: async(req,res) => {
        const {name, lastName, mail, password, photo, country} = req.body

        try {
            await new User({name, lastName, mail, password:[password], photo, country}).save()
            res.status(201).json({
                message: 'User created',
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: "Could't create user",
                success: false
            })
        }
    },

    all: async (req, res) => {
        try {
            let users = await User.find()

            res.status(200).json({
                message: "You get users",
                response: users,
                success: true
            })
        } catch (error){
            console.log(error)
            res.status(500).json()
        }
    },

    signUp: async(req, res) => {
        let {name, photo, password, email, role, from} = req.body

        try {
            let user = await User.findOne({email})
            if (!user) {
                let logged = false
                let verified = false
                let code = crypto.randomBytes(15).toString('hex')

                if(from==='form'){
                    password = bcryptjs.hashSync(password,10)

                    user = await new User({name, photo, email, password:[password], role, from:[from], logged, verified, code}).save()

                    res.status(201).json({
                        message: "Thanks for register",
                        success: true
                    })
                } else {
                    password = bcryptjs.hashSync(password,10)
                    verified = true

                    user = await new User({name, photo, email, password:[password], role, from:[from], logged, verified, code}).save()

                    res.status(201).json({
                        message: "Thanks for register with "+from,
                        success: true
                    })
                }
            } else {
                if (user.from.includes(from)) {
                    res.status(200).json({
                        message: "User already exists",
                        success: false
                    })
                } else {
                    user.from.push(from)
                    user.verified = true
                    user.password.push(bcryptjs.hashSync(password,10))

                    await user.save()
                }
            }


        } catch(error) {
            console.log(error)
            res.status(400).json({
                message: "Couldn't signed up",
                success: false
            })
        }
    },

    verifyMail: async() => {},

    signIn: async() => {},

    signOut: async() => {}
}


module.exports = userController