require('dotenv').config()
const db = require('./config/database') 
const Itinerary = require("./models/Itinerary")


Itinerary.create(
// 3 CIUDADES CON 1 ITINERARIO

    {
        name:"Top of the rock observation deck",
        user:"63237bd083c73df916a6246b",
        city:"630fb1cb8faf68486b5cf0b4",
        price:4,
        likes:[35],
        tags:["skyline", "view", "NewYork", "topOfTheRock", "photography"],
        duration:2
    },
    {
        name:"Must-do thing Bangkok",
        user:"63237bd083c73df916a6246b",
        city:"630fb1cb8faf68486b5cf0b6",
        price:3,
        likes:[14],
        tags:["bangkok", "palace", "travel", "beatiful"],
        duration:4
    },
    {
        name:"Istanbul: Travel guide",
        user:"63237bd083c73df916a6246b",
        city:"630fb1cb8faf68486b5cf0bb",
        price:3,
        likes:[19],
        tags:["istanbul", "travel", "travelGuide"],
        duration:3
    },

// 3 CIUDADES CON 2 ITINERARIOS

//ROMA
    {
        name:"Rome: History of the world",
        user:"63237bd083c73df916a62469",
        city:"630fb1cb8faf68486b5cf0b9",
        price:5,
        likes:[12],
        tags:["rome", "history", "italy"],
        duration:11
    },
    {
        name:"Rome: Coliseum guide",
        user:"63237bd083c73df916a62469",
        city:"630fb1cb8faf68486b5cf0b9",
        price:3,
        likes:[5],
        tags:["coliseum", "roma", "travel", "italy"],
        duration:3
    },

//KYOTO
    {
        name:"Travel around Kyoto, Japan",
        user:"63237bd083c73df916a62469",
        city:"630fb1cb8faf68486b5cf0b2",
        price:5,
        likes:[12],
        tags:["kyoto", "travel", "japan"],
        duration:11
    },
    {
        name:"Kyoto Gardens",
        user:"63237bd083c73df916a6246a",
        city:"630fb1cb8faf68486b5cf0b2",
        price:3,
        likes:[5],
        tags:["garden", "travel", "kyoto", "buddhism"],
        duration:3
    },

//HONG KONG
    {
        name:"Travel around Hong Kong",
        user:"63237bd083c73df916a62469",
        city:"630fb1cb8faf68486b5cf0b7",
        price:5,
        likes:[12],
        tags:["travel", "hong-kong", "china"],
        duration:11
    },
    {
        name:"Hong Kong: Big City",
        user:"63237bd083c73df916a6246a",
        city:"630fb1cb8faf68486b5cf0b7",
        price:3,
        likes:[5],
        tags:["city", "travel", "hong-kong", "china"],
        duration:3
    },

// 3 CIUDADES CON 3 ITINERARIOS

// PARIS
    {
        name:"Eiffel Tower",
        user:"63237bd083c73df916a62469",
        city:"630fb1cb8faf68486b5cf0b1",
        price:2,
        likes:[10],
        tags:["eiffelTower", "paris", "tourEiffel", "parismonamour", "visitparis"],
        duration:1
    },
    {
        name:"The Museum tour",
        user:"63237bd083c73df916a62469",
        city:"630fb1cb8faf68486b5cf0b1",
        price:5,
        likes:[3],
        tags:["louvre", "louvremuseum", "museedulouvre", "parisjetaime"],
        duration:2
    },
    {
        name:"Palace of Versailles",
        user:"63237bd083c73df916a6246b",
        city:"630fb1cb8faf68486b5cf0b1",
        price:5,
        likes:[5],
        tags:["versailles", "versaillespalace", "paris", "parisjetaime"],
        duration:3
    },

// LONDON
    {
        name:"London Eye",
        user:"63237bd083c73df916a6246a",
        city:"630fb1cb8faf68486b5cf0b5",
        price:2,
        likes:[8],
        tags:["londoneye", "londonlife", "visitlondon", "londonbridge", "londoncity"],
        duration:2
    },
    {
        name:"Buckingham Palace",
        user:"63237bd083c73df916a6246b",
        city:"630fb1cb8faf68486b5cf0b5",
        price:2,
        likes:[6],
        tags:["westminsterabbey", "westminster", "england", "westminsterpalace"],
        duration:2
    },
    {
        name:"Harry Potter",
        user:"63237bd083c73df916a62469",
        city:"630fb1cb8faf68486b5cf0b5",
        price:3,
        likes:[5],
        tags:["harrypotter", "hp", "england", "potterhead"],
        duration:5
    },
    
//CANCUN
    {
        name:"Beatiful beaches",
        user:"63237bd083c73df916a6246b",
        city:"630fb1cb8faf68486b5cf0be",
        price:2,
        likes:[4],
        tags:["beach", "mexico", "cancun"],
        duration:9
    },
    {
        name:"Chichen Itza",
        user:"63237bd083c73df916a6246b",
        city:"630fb1cb8faf68486b5cf0be",
        price:4,
        likes:[6],
        tags:["cancun", "chicenitza", "history", "mexico"],
        duration:6
    },
    {
        name:"Isla Mujeres",
        user:"63237bd083c73df916a62469",
        city:"630fb1cb8faf68486b5cf0be",
        price:4,
        likes:[5],
        tags:["cancun", "mexico", "tulum", "cancunmexico", "mexicanisland", "catamarantour"],
        duration:10
    },
)