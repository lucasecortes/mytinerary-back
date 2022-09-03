var express = require('express');
var router = express.Router();
const {create} = require('../controllers/userController')

/* GET users listing. */
router.post('/', create);

module.exports = router;