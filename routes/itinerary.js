var express = require('express');
var router = express.Router();
const {create, update} = require('../controllers/itineraryController')

router.post('/', create);
router.patch('/:id', update)

module.exports = router;