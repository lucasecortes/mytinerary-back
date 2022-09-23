var express = require('express')
var router = express.Router()
let passport = require('../config/passport');
const {create, all, update , destroy} = require('../controllers/commentController')

// GET users listing
router.get('/', all)
router.post('/', passport.authenticate('jwt', {session:false}), create)
router.patch('/:id', passport.authenticate('jwt', {session:false}), update)
router.delete('/:id', passport.authenticate('jwt', {session:false}), destroy)

module.exports = router