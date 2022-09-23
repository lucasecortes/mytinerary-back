var express = require('express');
var router = express.Router();
let passport = require('../config/passport');
const {create, update, destroy, all, like} = require('../controllers/itineraryController')

router.post('/', create);
router.patch('/likes/:id', passport.authenticate('jwt', {session:false}), like)
router.get('/', all)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router;