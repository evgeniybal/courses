var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');


var express = require('express')
  , app = express()

app.use(require('./controllers/index.js'))

app.listen(3000, function() {
  console.log('Listening on port 3000...')
})
