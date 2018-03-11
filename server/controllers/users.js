var express = require('express')
  , router = express.Router()


router.get('/users', function(req, res) {
  res.send([])
})


module.exports = router
