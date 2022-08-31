var express = require('express')
var router = express.Router()
const {all, create, read, update, destroy} = require('../controllers/cityController')

// GET users listing
router.post('/', create)
router.get('/', all)
router.get('/:id', read)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router