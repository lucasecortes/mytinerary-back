require('dotenv').config()
require('./config/database')
const User = require('./models/User')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')


User.create({
    name: "Lionel",
    lastName: "Messi",
    mail: "liomessi10@gmail.com",
    password: [bcryptjs.hashSync("Scaloneta123",10)] , 
    photo: "https://br.web.img3.acsta.net/c_310_420/pictures/19/08/14/22/33/0632419.jpg",
    country: "Argentina",
    code: crypto.randomBytes(15).toString('hex'),
    from: ["form"],
    loggedIn: false,
    verified: true
},
{
    name: "Rodrigo",
    lastName: "De Paul",
    mail: "rodridp@gmail.com",
    password: [bcryptjs.hashSync("Scaloneta123",10)],
    photo: "https://images.ecestaticos.com/SdyZ4C1ZgZdj_pxO6FpoR7vOI-M=/0x0:2272x1556/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F583%2Fbcd%2F2a4%2F583bcd2a4d716d7fc3a207815db104a2.jpg",
    country: "Argentina",
    code: crypto.randomBytes(15).toString('hex'),
    from: ["form"],
    loggedIn: false,
    verified: true
},
{
    name: "Alejandro",
    lastName: "Gomez",
    mail: "papugol@gmail.com",
    password: [bcryptjs.hashSync("Scaloneta123",10)],
    photo: "https://pbs.twimg.com/media/FDnHSZoWEAYnZW1?format=jpg&name=900x900",
    country: "Argentina",
    code: crypto.randomBytes(15).toString('hex'),
    from: ["form"],
    loggedIn: false,
    verified: true
},
)