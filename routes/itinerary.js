var express = require('express');
var router = express.Router();
const {create} = require('../controllers/itineraryController')

router.post('/', create);

module.exports = router;