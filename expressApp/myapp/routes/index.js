var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/notes', function(req, res, next) {
  res.render('index', { title: 'Notes' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
  //res.render('form', { title: 'Fill the form' });

/* to load one save item  from db */
  // User.findOne({}, function(err, doc){
  //   if(err){
  //     res.send("Error!!! " + err);
  //   }
  //   res.render('form', { title: 'Fill the form', doc});
  // }); 
});

router.post('/', function(req, res, next) {
  var email = req.body.email;
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" + email);
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    message: []
  });

  user.save();
  res.redirect('/');
});


/* router.get('/login/:mail', function(req, res, next) {
  res.render('login', { title: 'Login using ' + req.params.mail});
});

router.post('/login', function(req, res, next) {
  console.log("============================ " + req.body.mail);
  res.redirect('/login/' + req.body.mail)
});
*/
module.exports = router;
