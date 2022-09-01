const mongoose = require('mongoose')

const activitiesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    photo: {type: String, required: true},
    itinerary: {type: String},
})

const Activity = mongoose.model(
    'activities',
    activitiesSchema
)

module.exports = Activity