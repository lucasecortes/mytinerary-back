const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    comment: {type: String, required: true},
    user: {type: String},
    itinerary: {type: String},
})

const Comment = mongoose.model(
    'comments',
    commentsSchema
)

module.exports = Comment