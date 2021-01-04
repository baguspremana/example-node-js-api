var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('Belajar Buat Restful API dengan Express Node Js Menyenangkan Sekali');
});

export default router;
