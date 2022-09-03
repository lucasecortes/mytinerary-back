const User = require('../models/User')

const userController = {
    create: async(req,res) => {
        const {name, lastName, mail, password, photo, country} = req.body

        try {
            await new User({name, lastName, mail, password, photo, country}).save()
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
    }
}

module.exports = userController