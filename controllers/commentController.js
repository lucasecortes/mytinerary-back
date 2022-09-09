const Comment = require('../models/Comment')

const commentController = {
    create: async(req,res) => {
        const {comment, user, itinerary} = req.body

        try {
            await new Comment({comment, user, itinerary}).save()
            res.status(201).json({
                message: "Comment created",
                success: true
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Couldn't comment created",
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
            let comments = await Comment.find(query)
            .populate("itinerary",{name:1})
            .populate("user",{name:1})
            if (comments) {
                res.status("200").json({
                    message: "These are the comments",
                    response: comments,
                    success: true,
            })
            } else {
                res.status("404").json({
                    message: "No comments could be found",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status("400").json({
                message: "Your comment couldn't be added.",
                success: false,
            })
        }
    }
}

module.exports = commentController