const express = require('express');
const bodyParser = require('body-parser');
//const distDir = __dirname + '/dist/';
const app = express();
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use(require('./controllers'));


app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.  
  var baseUrl =  __dirname.substring(0, __dirname.lastIndexOf('server'));    
  var angularIndex = baseUrl + 'dist/index.html'; 
  res.sendFile(angularIndex);
});

var {
  mongoose,
  mongooseUri
} = require('./db/mongoose');


mongoose.connect(mongooseUri).then(() => {
  console.log('Database connection ready');
  const server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log('App now running on port ' + port);
  });

}, (err) => {
  console.log(err);
  process.exit(1);
});
