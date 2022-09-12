var express = require('express');
var router = express.Router();
const {create, all, verifyMail, signUp, signIn} = require('../controllers/userController')

/* GET users listing. */
router.post('/', create);
router.get('/', all);
router.post('/signup', signUp)
router.post('/signin', signIn)
router.get('/verify/:code', verifyMail)

module.exports = router;