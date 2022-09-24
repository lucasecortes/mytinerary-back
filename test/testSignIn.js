// const request = require('supertest')
// const app = require('../server')
// const { assert } = require('chai')

// describe('POST /auth/signin', function () {
//     it('Must respond with the name', function () {
//         request(app)
//             .post('/auth/signin')
//             .send({
//                 mail: "papugol@gmail.com",
//                 password: "Scaloneta123",
//                 from: 'form'

//             })
//             .then(response => {
//                 city = response.body.name
//                 assert.isString(response.body.name)
//                 done()
//             })
//     })

//     it('Must respond with 400 status code', function (done) {
//         request(app)
//             .post('/signin')
//             .send({
//                 mail: "papugol@gmail.com",
//                 password: "EstaNoEs",
//                 from: 'form'
//             })
//             .expect(400)
//         done()
//     })

//     it('Must respond with 404 status code', function (done) {
//         request(app)
//             .post('/signin')
//             .send({})
//             .expect(404, done)


//     })


// })