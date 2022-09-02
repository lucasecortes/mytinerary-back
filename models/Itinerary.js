const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {type: String, required: true},
    user: {type: String, required: true},
    city: {type: String, required: true},
    price: {type: Number, required: true},
    likes: {type: Array, required: true},
    tags: {type: Array, required: true},
    duration: {type: Array, required: true}
})

const Itinerary = mongoose.model(
    'itineraries',
    schema
)

module.exports = Itinerary



