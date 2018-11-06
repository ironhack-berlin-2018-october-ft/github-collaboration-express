const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/ironhackers/matthias', (req, res, next) => {
  res.render('matthias');
});




module.exports = router;
