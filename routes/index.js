const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/ironhackers/nele', (req, res, next) => {
  res.render('ironhackers/nele');
});


module.exports = router;
