var express = require('express');
var router = express.Router();
const {all, verifyMail, signUp, signIn, signOut} = require('../controllers/userController')


/* GET users listing. */
router.get('/', all);
router.get('/signup', all);
router.post('/signup', signUp)
router.post('/signout', signOut)
router.post('/signin', signIn)
router.get('/verify/:code', verifyMail)

module.exports = router;