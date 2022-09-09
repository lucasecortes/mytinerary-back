var express = require('express');
var router = express.Router();
const {create, all} = require('../controllers/userController')

/* GET users listing. */
router.post('/', create);
router.get('/', all);

module.exports = router;