const express = require('express');
const router = express.Router();

router.use('/api', require('./users'));

router.get('/', function(req, res) {
  res.send('Home page');
});

router.get('/about', function(req, res) {
  res.send('Learn about us');
});

module.exports = router;
