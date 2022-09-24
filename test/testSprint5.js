const request = require('supertest')
const app = require('../server')
const { assert } = require('chai')
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmRlY2EyNzQ4Y2M0ODcwY2FkY2E3NSIsImlhdCI6MTY2Mzk1NDEyMywiZXhwIjoxNjY0MDQwNTIzfQ.3ljgs1YJg2c08o2SH4hqHKi_EPyxsjEUBrz5d3WRNXY'

// describe('POST /events', function () {
//     it('Must respond with 201 status code', function (done) {
//         request(app)
//             .post('/events')
//             .send({})
//             .expect(201)
//             .end(function (err, res) {
//                 if (err) return done(err);
//                 return done()
//             })
//     })
// })

describe('PATCH /itineraries/likes/:id', function () {
    it('Must respond with the following like has been updated', function () {
        request(app)
            .patch('/itineraries/likes/63239816ec4de05815f7e790')
            .send({
                headers: {Authorization: 'Bearer ' + token}
            })
            .expect(401)
            .then((res) => {
                assert.isObject(res.body.id)
                done()
            })
    })
})

describe('GET /itineraries/auth', function () {
    it('Must respond with 404 status code', function (done) {
        request(app)
            .get('/itineraries/auth')
            .send({})
            .expect(404)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            })
    })
})