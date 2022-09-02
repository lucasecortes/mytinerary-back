const mongoose =  require('mongoose')

mongoose.connect(
    process.env.MONGO_URI,
    {
        useUnifiedTopology: true, // habilita a Mongoose a controlar la DB de Mongo
        useNewUrlParser: true // utiliza el analizador de errores de Mongoose en lugar del de Mongo
    }
).then( () => console.log('Connected to DB successfully'))
.catch(err => console.log(err))