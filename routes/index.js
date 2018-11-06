const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/ironhack/ziggy', (req, res, next) => {
  res.render('/ziggy');

router.get('/ironhackers/maxence', (req, res, next) => {
  res.render('ironhackers/maxence');

});
router.get('/ironhackers/feli', (req, res, next) => {
  res.render('ironhackers/feli');
});

router.get('/ironhackers/samanta', (req, res, next) => {
  res.render('ironhackers/samanta');
});
module.exports = router;
