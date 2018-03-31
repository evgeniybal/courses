const express = require('express'),
  router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const {
  User
} = require('../models/user');

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
router.get('/users', async (req, res) => {
  let orderByObj = {};
  console.warn(req.query);
  var selectObj = req.query.$select.split(',')
    .reduce(function (acc, cur, i) {
      acc[cur] = 1;
      return acc;
    }, {});
  if (req.query.$orderby) {
    orderByObj = req.query.$orderby.split(',')
      .reduce(function (acc, cur, i) {
        let cur1 = cur.split(' ');
        if (cur1[1] === 'desc') {
          cur = cur1[0];
          acc[cur] = -1;
        } else {
          acc[cur] = 1;
        }
        return acc;
      }, {});
  }
  try {
    let total = await User.count();
    let query = {
      $query: {},
      $project: selectObj,
      $orderby: orderByObj
    };
    console.log('query mapped: ', query);

    let docs = await User.find({}).sort(orderByObj);
    //console.log(req);
    res.send({
      data: docs,
      totalCount: total
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/users/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  User.findById(id).then((user) => {
    if (!user) {
      return res.status(404).send();
    }

    res.send(
      user
    );
  }).catch((e) => {
    console.log(e);
    res.status(400).send();
  });
});


router.delete('/users/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  User.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send(todo);
  }).catch((e) => {
    console.log(e);
    res.status(400).send();
  });
});



module.exports = router;
