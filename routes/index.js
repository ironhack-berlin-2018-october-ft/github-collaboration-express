const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/ironhackers/nele', (req, res, next) => {
  res.render('ironhackers/nele');
});

router.get('/ironhackers/carlos', (req, res, next) => {
  res.render('ironhackers/carlos');
});

router.get('/ironhackers/ziggy', (req, res, next) => {
  res.render('ironhackers/ziggy');
});

router.get('/ironhackers/maxence', (req, res, next) => {
  res.render('ironhackers/maxence');
});

router.get('/ironhackers/feli', (req, res, next) => {
  res.render('ironhackers/feli');
});

router.get('/ironhackers/axel', (req, res, next) => {
  res.render('ironhackers/axel');
});

module.exports = router;
