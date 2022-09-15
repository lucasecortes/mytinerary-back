const mongoose =  require('mongoose')

const usersSchema = new mongoose.Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    mail: {type: String, required: true},
    password: [{type: String, required: true}],
    photo: {type: String, required: true},
    country: {type: String, required: true},
    from: [{type:String, required: true}],
    loggedIn: {type: Boolean, required: false},
    verified: {type: Boolean, required: false},
    code: {type: String , required: true}
})

const User = mongoose.model(
    'users',
    usersSchema
)

module.exports = User