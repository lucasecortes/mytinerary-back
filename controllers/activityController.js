const Activity = require('../models/Activity')

const activityController = {
    create: async(req,res) => {
        const {name, photo, itinerary} = req.body

        try {
            await new Activity({name, photo, itinerary}).save()
            res.status(201).json({
                message: "Activity created",
                success: true
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Couldn't activity created",
                success: false
            })
        }
    },

    all: async(req, res) => {
        let query = {}

        if(req.query.itinerary){
            query.itinerary = req.query.itinerary
        }
        try {
            let activities = await Activity.find(query)
            .populate("itinerary",{name:1})
            if (activities) {
                res.status("200").json({
                    message: "These are the activities",
                    response: activities,
                    success: true,
            })
            } else {
                res.status("404").json({
                    message: "No activities could be found",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status("400").json({
                message: "Your activity couldn't be added.",
                success: false,
            })
        }
    },

    getActivity: async (req, res) => {
        const {id} = req.params
        try {
            let activity = await Activity.find(query)
            .populate('itinerary', {price:1, name:1})

            if (activity) {
                res.status("200").json({
                    message: "activity found",
                    response: activity,
                    success: true,
                })
            } else {
                res.status("404").json({
                    message: "Could not be found",
                    success: false,
                })
            } 
        } catch (error) {
            console.log(error)
            res.status("400").json({
                message: "Error",
                success: false,
            })
        }
    }
}

module.exports = activityController