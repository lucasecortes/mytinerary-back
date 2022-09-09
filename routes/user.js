var express = require('express');
var router = express.Router();
const {create, all, signUp} = require('../controllers/userController')

/* GET users listing. */
router.post('/', create);
router.get('/', all);
router.post('/signup', signUp)

module.exports = router;