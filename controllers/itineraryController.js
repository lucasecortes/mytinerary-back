const Itinerary = require('../models/Itinerary')
const Joi = require('joi')

const validator = Joi.object({
    name: Joi.string().min(3).max(50).required().messages({
        'any.required': 'NAME_REQUIRED',
        'string.empty': 'NAME_REQUIRED',
        'string.min': 'NAME_TOO_SHORT',
        'string.max': 'NAME_TOO_LARGE',
    }),
    user: Joi.string().hex().required().messages({
        'any.required': 'USER_REQUIRED',
        'string.empty': 'USER_REQUIRED',
    }),
    city: Joi.string().hex().required().messages({
        'any.required': 'CITY_REQUIRED',
        'string.empty': 'CITY_REQUIRED',
    }),
    price: Joi.number().integer().min(0).max(500).required().messages({
        'number.base': 'INVALID_PRICE',
        'any.required': 'PRICE_REQUIRED',
        'number.empty': 'PRICE_REQUIRED',
        'number.min': 'INVALID_PRICE',
        'number.max': 'PRICE_TOO_MUCH',
    }),
    likes: Joi.array().required(),
    tags: Joi.array().required(),
    duration: Joi.number().integer().min(1).max(200).required().messages({
        'number.base': 'INVALID_DURATION',
        'any.required': 'DURATION_REQUIRED',
        'number.empty': 'DURATION_REQUIRED',
        'number.min': 'DURATION_TOO_SHORT',
        'number.max': 'DURATION_TOO_LARGE',
    })
})

const itineraryController = {
    create: async(req,res) => {
        const {name, user, city, price, likes, tags, duration} = req.body

        try {
            let result = await validator.validateAsync(req.body)
           let itinerary = await new Itinerary({name, user, city, price, likes, tags, duration}).save()
            res.status(201).json({
                message: 'Itinerary created',
                success: true,
                response: itinerary
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Couldn't itinerary created",
                success: false                
            })
        }
    },

    update: async(req, res) => {
        const {id} = req.params
        try {
            let itinerary = await Itinerary.findOne({_id:id})
            if (itinerary) {
                await Itinerary.findOneAndUpdate({_id:id},req.body,{new:true})
                res.status(200).json({
                    message: 'Itinerary update',
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Couldn't find itinerary",
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

    destroy: async(req,res) => {
        const {id} = req.params
        try {
            let itinerary = await Itinerary.findOne({_id:id})
            if (itinerary) {
                await Itinerary.findOneAndDelete({_id:id})
                res.status(200).json({
                    message: 'Itinerary deleted',
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Itinerary don't exist",
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

    all: async (req, res) => {
        let query = {}

        if (req.query.city) {
            query.city = req.query.city
        }

        if (req.query.user) {
            query.user = req.query.user
        }

        try {
            let itineraries = await Itinerary.find(query)
            .populate('city',{city:1})
            .populate('user',{name:1, photo:1, lastName:1})

            if (itineraries) {
                res.status(200).json({
                    message: "you get itineraries",
                    response: itineraries,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "couldn't find itineraries",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)

            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },

    like: async (req, res) => {
        
        let { id } = req.params
        let itineraryId  = req.user.id.toString()
        try {
            console.log( itineraryId )
            let itinerary = await Itinerary.findOne({_id: id})
            console.log(itineraryId)
            if (itinerary.likes.includes(itineraryId)) {
                itinerary.likes.pull(itineraryId)
                await itinerary.save()
                res.status(200).json({
                    message: "Itinerary dislike it!",
                    success: true,
                    response: itinerary.likes
                })
            } else {
                itinerary.likes.push(itineraryId)
                await itinerary.save()
                res.status(200).json({
                    message: "Itinerary like it!",
                    success: true,
                    response: itinerary.likes
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'error',
                success: false
            })
        }
    }
}


module.exports = itineraryController