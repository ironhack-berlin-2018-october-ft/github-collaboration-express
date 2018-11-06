const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/ironhackers/carlos', (req, res, next) => {
  res.render('carlos');
});

module.exports = router;
