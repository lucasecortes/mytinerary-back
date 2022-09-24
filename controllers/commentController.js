const Comment = require('../models/Comment')

const commentController = {
    create: async(req,res) => {
        const {comment, user, itinerary} = req.body

        try {
           let id = await new Comment({comment, user, itinerary}).save()
            res.status(201).json({
                message: "Comment created",
                success: true,
                response: id._id
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Couldn't comment created",
                success: false
                
            })
        }
    },
    update: async(req, res) => {
        const {id} = req.params
        try {
            let comment = await Comment.findOne({_id:id})
            if (comment) {
                await Comment.findOneAndUpdate({_id:id},req.body,{new:true})
                res.status(200).json({
                    message: 'Comment update',
                    success: true,
                    response: comment
                })
            } else {
                res.status(404).json({
                    message: "Couldn't find Comment",
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
    all: async(req, res) => {
        let query = {}

        if(req.query.itinerary){
            query.itinerary = req.query.itinerary
        }
        try {
            let comments = await Comment.find(query)
            .populate("itinerary",{name:1})
            .populate("user",{name:1, lastName:1, mail:1, photo:1})
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
    },
    destroy: async(req,res) => {
        const {id} = req.params
        try {
            let comment = await Comment.findOne({_id:id})
            if (comment) {
                await Comment.findOneAndDelete({_id:id})
                res.status(200).json({
                    message: 'Comment deleted',
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Comment don't exist",
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
}

module.exports = commentController