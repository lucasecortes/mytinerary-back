const mongoose = require('mongoose')

const citiesSchema = new mongoose.Schema({
    city: {type: String, required: true},
    country: {type: String, required: true},
    photo: {type: String, required: true},
    population: {type: Number, min: 1000, max: 100000000, required: true},
    founded: {type: Date, required: true},
})

const City = mongoose.model(
    'cities',
    citiesSchema
)

module.exports = City