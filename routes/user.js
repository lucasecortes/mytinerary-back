var express = require('express');
var router = express.Router();
const {all, oneUser, verifyMail, signUp, signIn, signOut} = require('../controllers/userController')


/* GET users listing. */
router.get('/', all);
router.get('/:id', oneUser);
router.get('/signup', all);
router.post('/signup', signUp)
router.post('/signout', signOut)
router.post('/signin', signIn)
router.get('/verification/:code', verifyMail)

module.exports = router;

// passport.authenticate('jwt', {session:false}),
