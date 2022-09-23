const passport = require('passport')
const passportJwt = require('passport-jwt')

const {KEY_JWT} = process.env
const User = require('../models/User')

passport.use( 
        // si se cumplen las condiciones del pasaporte, avanza al método del controlador
    new passportJwt.Strategy( // definimos la forma en la que se va a decodificar y la clave de validación
        {
            jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: KEY_JWT
        }, // nos retorna un objeto jwt_payload(con la data del token)
        async (jwt_payload,done) => {
            // console.log(jwt_payload)
            try {
                let user = await User.findOne({_id:jwt_payload.id})
                // console.log(user)
                if (user) {
                    user = {
                        id: user._id,
                        name: user.name,
                        mail: user.mail,
                        role: user.role,
                        photo: user.photo,
                    }
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            } catch (error) {
                console.log(error)
                return done(error,false)
            }
        } 
    )
)

module.exports = passport