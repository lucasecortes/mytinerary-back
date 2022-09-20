var express = require('express')
var router = express.Router()
const {create, all, getActivity} = require('../controllers/activityController')

// GET users listing
router.post('/', create)
router.get('/', all)
router.get('/:id', getActivity)

module.exports = router