var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([]);
});

/* URL Param http://localhost:3001/341*/
router.get('/:id', function(req, res, next) {
  if ( req.params.id == 123 ) {
    res.status(404).json()
    return
  }
  res.json({
    id: req.params.id
  });
});

module.exports = router;
