// const request = require('supertest')
// const app = require('../server')
// const { assert } = require('chai')

//  describe('POST /signup', function () {

//     it('Must respond with the id', function(){
//         request(app)
//             .post('/auth/signup')
//             .send({
//                 name:"Alejandro",
//                 lastName:"Gomez",
//                 mail:"papugol@gmail.com",
//                 password:"Scaloneta123",
//                 photo:"https://pbs.twimg.com/media/FDnHSZoWEAYnZW1?format=jpg&name=900x900",
//                 country:"Argentina",
//                 from: "form",
//                 role: "user"
//             })
//             .then(response => {
//                 city = response.body.id
//                 assert.isString(response.body.id)
//                 done()
//                 })
//     })

//     it('Must respond with 400 status code', function(done){
//         request(app)
//             .post('/auth/signup')
//             .send({
//                 name:" ",
//                 lastName:"Gomez",
//                 mail:"papugol@gmail.com",
//                 password:"Scaloneta123",
//                 photo:"https://pbs.twimg.com/media/FDnHSZoWEAYnZW1?format=jpg&name=900x900",
//                 country:"Argentina",
//                 from: "form",
//                 role: "user"
//             })
//             .expect(400, done)

//     })

//     it('Must respond with 404 status code', function(done){
//         request(app)
//             .post('/signup')
//             .send({})
//             .expect(404, done)


//     })


//    })