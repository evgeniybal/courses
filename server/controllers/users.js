var express = require('express')
  , router = express.Router();
const {User} = require('../models/user');

//POST users
router.post('/users', (req, res) => {
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone
  });

  user.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET users
router.get('/users', (req, res)=>{
  User.find({}).then((docs)=>{
    res.send({docs});
  },(e)=>{
    res.status(400).send(e);
  });
});

//GET users
router.get('/users/:userId', (req, res)=>{
  var userId = req.params.userId;

  User.findById(userId).then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});

module.exports = router;
