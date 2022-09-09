require('dotenv').config()
require('./config/database')
const User = require('./models/User')

User.create({
    name: "Lionel",
    lastName: "Messi",
    mail: "liomessi10@gmail.com",
    password: "Scaloneta123",
    photo: "https://br.web.img3.acsta.net/c_310_420/pictures/19/08/14/22/33/0632419.jpg",
    country: "Argentina"
},
{
    name: "Rodrigo",
    lastName: "De Paul",
    mail: "rodridp@gmail.com",
    password: "Scaloneta123",
    photo: "https://images.ecestaticos.com/SdyZ4C1ZgZdj_pxO6FpoR7vOI-M=/0x0:2272x1556/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F583%2Fbcd%2F2a4%2F583bcd2a4d716d7fc3a207815db104a2.jpg",
    country: "Argentina"
},
{
    name: "Alejandro",
    lastName: "Gomez",
    mail: "papugol@gmail.com",
    password: "Scaloneta123",
    photo: "https://pbs.twimg.com/media/FDnHSZoWEAYnZW1?format=jpg&name=900x900",
    country: "Argentina"
},
)