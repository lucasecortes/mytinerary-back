const mongoose = require('mongoose')

const activitiesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    photo: {type: String, required: true},
    itinerary: {type: mongoose.Types.ObjectId, ref:'itineraries'},
})

const Activity = mongoose.model(
    'activities',
    activitiesSchema
)

module.exports = Activity