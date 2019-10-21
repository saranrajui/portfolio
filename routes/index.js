var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio | Home' });
});

// privacy policy
router.get('/privacy-policy', function(re, res, next) {
  res.render('privacy-policy', { title: 'Portfolio | Privacy Policy'});
})
// terms of service
router.get('/terms', function(req, res, next) {
  res.render('terms-service', {title: 'Portfolio | Terms of Service'})
});
router.get('/get', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
