require('dotenv').config()

const db = require('./config/database')
const City = require('./models/City')


City.create({
    city: 'Paris',
    country: 'France',
    photo: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-paris-france.jpg",
    population: '2161000',
    founded: '1792'
},
{
    city: 'Kyoto',
    country: 'Japan',
    photo: "https://blog.goway.com/globetrotting/wp-content/uploads/2018/05/Kiyomizu-dera-Temple-and-cherry-blossom-season-Sakura-spring-time-in-Kyoto-Japan-_1017748333.jpg",
    population: '1475000',
    founded: '794'
},
{
    city: 'Buenos Aires',
    country: 'Argentina',
    photo: "https://guias-viajar.com/wp-content/uploads/2021/04/Avenida-9-de-julio-Buenos-Aires-en-Argentina.jpg",
    population: '17541141',
    founded: '1536'
},
{
    city: 'New York',
    country: 'USA',
    photo: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-new-york-city.jpg",
    population: '8380000',
    founded: '1624'
},
{
    city: 'London',
    country: 'England',
    photo: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-london-england.jpg",
    population: '8982000',
    founded: '47'
},
{
    city: 'Bangkok',
    country: 'Thailand',
    photo: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-bangkok-thailand.jpg",
    population: '10539000',
    founded: '1972'
},
{
    city: 'Hong Kong',
    country: 'China',
    photo: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-hong-kong.jpg",
    population: '7482000',
    founded: '1841'
},
{
    city: 'Copenhagen',
    country: 'Denmark',
    photo: "https://www.planetware.com/wpimages/2020/03/denmark-in-pictures-beautiful-places-to-photograph-nyhavn-copenhagen.jpg",
    population: '602481',
    founded: '1167'
},
{
    city: 'Rome',
    country: 'Italy',
    photo: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-rome-italy.jpg",
    population: '2873000',
    founded: '1946'
},
{
    city: 'Macau',
    country: 'China',
    photo: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-macau-china.jpg",
    population: '649342',
    founded: '1999'
},
{
    city: 'Istanbul',
    country: 'Turkey',
    photo: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-istanbul-turkey.jpg",
    population: '15460000',
    founded: '330'
},
{
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    photo: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-kuala-lumpur-malaysia.jpg",
    population: '32370000',
    founded: '1857'
},
{
    city: 'Delhi',
    country: 'India',
    photo: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-delhi-india.jpg",
    population: '18980000',
    founded: '1911'
},
{
    city: 'Cancun',
    country: 'Mexico',
    photo: "https://www.planetware.com/wpimages/2019/08/mexico-cancun-top-attractions-cancuns-beautiful-beaches.jpg",
    population: '888797',
    founded: '1970'
}
)