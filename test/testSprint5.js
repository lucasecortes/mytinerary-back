const request = require('supertest')
const app = require('../server')
const { assert } = require('chai')
let token = ''

describe('POST /auth/signin', function () {
    it('Must respond with 201 status code', function () {
        request(app)
            .post('/auth/signin')
            .send({
                mail: "liomessi10@gmail.com",
                password: "Scaloneta123",
                from: 'form'
            })
            .expect(201)
            .then(response => {
                token = response.token
                assert.isString(response.body.name)
            })
    })
})

describe('PATCH /itineraries/likes/:id', function () {
    it('Must respond with the following like has been updated', function () {
        request(app)
            .patch('/itineraries/likes/63239816ec4de05815f7e790')
            .send({})
            .set({
                "Authorization": 'Bearer ' + token
            })
            .expect(200)
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

    it('Must respond with 404 status code', function (done) {
        request(app)
            .get('/itineraries/6318cce09520ca907a04cb27')
            .send({})
            .expect(404)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            })
    })
})