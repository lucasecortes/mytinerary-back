const City = require('../models/City')

const cityController = {
    create: async(req, res) => {
        // const {city,country,photo,population,fundation} = req.body
        try {
            await new City (req.body).save()
            res.status(201).json({
                message: 'City created',
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: 'Could not create city',
                success: false
            })
        }
    },
    read: async(req, res) => {
        const {id} = req.params
        try {
            let city = City.findOne({_id:id})
            if (city) {
                res.status(200).json({
                    message: '',
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'not found',
                    success: false
                })
            }
        } catch (error) {
            res.status(400).json({
                message: 'error',
                success: false
            })
        }
    }
}

module.exports = cityController