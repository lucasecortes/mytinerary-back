const { query } = require('express')
const Itinerary = require('../models/Itinerary')

const itineraryController = {
    create: async(req,res) => {
        const {name, user, city, price, likes, tags, duration} = req.body

        try {
            await new Itinerary({name, user, city, price, likes, tags, duration}).save()
            res.status(201).json({
                message: 'Itinerary created',
                success: true
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
            .populate('user',{name:1})

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
    }
}


module.exports = itineraryController