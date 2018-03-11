const express = require('express');
const bodyParser = require('body-parser');
//const distDir = __dirname + '/dist/';
const app = express();
app.use(bodyParser.json());
// console.log(distDir);
// app.use(express.static(distDir));
app.use(express.static('dist'));

app.use(require('./controllers'));

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
