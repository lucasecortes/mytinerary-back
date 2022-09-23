var express = require('express');
let passport = require('../config/passport');
var router = express.Router();
const {all, oneUser, verifyMail, verifyToken, signUp, signIn, signOut, updateUser} = require('../controllers/userController')

/* GET users listing. */
router.get('/', all);
router.get('/:id', oneUser);
router.patch('/:id', updateUser);
router.get('/signup', all);
// router.get('/token', passport.authenticate('jwt', {session:false}), verifyToken)
router.post('/signup', signUp)
router.post('/signout', signOut)
router.post('/signin', signIn)
router.get('/verification/:code', verifyMail)

module.exports = router;
