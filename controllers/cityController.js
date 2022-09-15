const City = require('../models/City')
const Joi = require('joi')

const validator = Joi.object({
    city: Joi.string().required(),
    country: Joi.string().required(),
    photo: Joi.string().uri().required(),
    population: Joi.number().integer().min(1000).max(100000000).required(),
    founded: Joi.date().required()
})

const cityController = {
    create: async(req, res) => {
        try {
            let result = await validator.validateAsync(req.body)
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
    all: async(req, res) => {
        let query = {}
        
        if (req.query.city) {
            query.city = req.query.city
            let regExp = new RegExp(`^${query.city}`, "i")
            query.city = regExp
        }

        try {
            let city = await City.find(query)
            res.status(200).json(city)
        } catch (error) {
            console.log(error)
            res.status(500).json()
        }
    },
    read: async(req, res) => {
        const {id} = req.params
        try {
            let city = await City.findOne({_id:id})
            if (city) {
                res.status(200).json({
                    message: 'You get one city',
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'City not found',
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'error',
                success: false
            })
        }
    },
    update: async(req, res) => {
        const {id} = req.params
        try {
            let city = await City.findOne({_id:id})
            if (city) {
                await City.findOneAndUpdate({_id:id},req.body,{new:true})
                res.status(200).json({
                    message: 'City updated',
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'Could not find city',
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
    destroy: async(req, res) => {
        const {id} = req.params
        try {
            let city = await City.findOne({_id:id})
            if (city) {
                await City.findOneAndDelete({_id:id})
                res.status(200).json({
                    message: 'City deleted',
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'City no not exist',
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
    }
}

module.exports = cityController