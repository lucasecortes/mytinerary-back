// const request = require('supertest')
// const app = require('../server')
// const {assert} = require('chai')

// describe('POST /cities', function() {
//     // it('Must respond with the id', function (done) {
//     //     request(app)
//     //     .post('/cities')
//     //     .send({
//     //         city: "Bariloche",
//     //         country: "Argentina",
//     //         photo: "photo921",
//     //         population: 30000,
//     //         founded: 1872
//     //     })
//     //     .then(response => {
//     //         assert.isString(response.body.id)
//     //         done()
//     //     })
//     // })

//     it('Must respond with 201 status code', function (done) {
//         request(app)
//         .post('/cities')
//         .send({
//             city: "Bariloche",
//             country: "Argentina",
//             photo: "photo921",
//             population: 6000,
//             founded: 1872
//         })
//         .expect(201)
//         .end(function (err, res) {
//             if (err) return done (err)
//             return done()
//         })
//     })

//     it('Must respond with 201 status code', function (done) {
//         request(app)
//         .post('/cities')
//         .send({
//             city: "Zurich",
//             country: "Switzerland ",
//             photo: "photo921",
//             population: 402762,
//             founded: 1872
//         })
//         .expect(201)
//         .end(function (err, res) {
//             if (err) return done (err)
//             return done()
//         })
//     })

//     it('Must respond with 400 status code', function (done) {
//         request(app)
//         .post('/cities')
//         .send({})
//         .expect(400)
//         .end(function (err, res) {
//             if (err) return done (err)
//             return done()
//         })
//     })
// })