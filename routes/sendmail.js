var express = require('express');
var nodeMailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var mailConfig = require('../public/javascripts/config.mail');
var Mailer = require('../public/javascripts/mailer');
var router = express.Router();

router.post('/sendmail', function (req, res) {
  console.log('calling semdmail.js');
  var subject = 'Contacting';
  return new Promise((resolve, reject) => {
    Mailer.send(req.body.email, subject , req.body.message).then((result) => {
      console.log(result);
      // resolve(result);
    }).catch((error) =>{
      console.log(error);
      // reject(error);
    })
  });
});
module.exports = router;