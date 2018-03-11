var express = require('express')
  , router = express.Router()


router.get('/users', function(req, res) {
  res.send([{id:1, name:'Yuriy'}, {id:2, name: 'Yevheniy'}])
})


module.exports = router
