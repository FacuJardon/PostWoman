var express = require('express');
var postwomanControllers = require('../controllers/postwomanRequest.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/request', postwomanControllers.execRequest);

module.exports = router;
