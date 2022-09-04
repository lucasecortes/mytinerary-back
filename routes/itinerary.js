var express = require('express');
var router = express.Router();
const {create, update, destroy} = require('../controllers/itineraryController')

router.post('/', create);
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router;