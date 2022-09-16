// const request = require('supertest')
// const app = require('../server')
// const {assert} = require('chai')

// describe('POST /itineraries', function() {
//     it('Must respond with 201 status code', function (done) {
//         request(app)
//         .post('/itineraries')
//         .send({
//             name: "Alejandro",
//             user: "63181031f35384d38640571f",
//             city: "Kyoto",
//             price: 700,
//             likes: 1872,
//             tags: 5,
//             duration: 360
//         })
//         .expect(201)
//         .end(function (err, res) {
//             if (err) return done (err)
//             return done()
//         })
//     })

//     it('Must respond with 201 status code', function (done) {
//         request(app)
//         .post('/itineraries')
//         .send({
//             name: "Rodrigo",
//             user: "63181031f35384d38640571d",
//             city: "Rome",
//             price: 400,
//             likes: 172,
//             tags: 21,
//             duration: 120
//         })
//         .expect(201)
//         .end(function (err, res) {
//             if (err) return done (err)
//             return done()
//         })
//     })

//     it('Must respond with 400 status code', function (done) {
//         request(app)
//         .post('/itineraries')
//         .send({})
//         .expect(400)
//         .end(function (err, res) {
//             if (err) return done (err)
//             return done()
//         })
//     })
// })