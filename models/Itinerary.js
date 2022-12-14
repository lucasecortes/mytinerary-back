const mongoose = require("mongoose")

const itinerariesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    user: {type: mongoose.Types.ObjectId, ref: 'users', required: true},
    city: {type: mongoose.Types.ObjectId, ref: 'cities', required: true},
    price: {type: Number, required: true},
    likes: {type: Array, required: true},
    tags: {type: Array, required: true},
    duration: {type: Number, required: true}
})

const Itinerary = mongoose.model(
    'itineraries',
    itinerariesSchema
)

module.exports = Itinerary



