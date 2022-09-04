var express = require('express');
var router = express.Router();
const cityRouter = require('./cities')
const userRouter = require('./user')
const itineraryRouter = require('./itinerary')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([]);
});

router.use('/cities', cityRouter);

router.use('/auth', userRouter)

router.use('/itineraries', itineraryRouter)

module.exports = router;
