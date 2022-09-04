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
            res.status(400).json({
                message: "Couldn't itinerary created",
                success: false
            })
        }
    }
}

module.exports = itineraryController