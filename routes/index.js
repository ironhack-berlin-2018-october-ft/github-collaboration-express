const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/ironhackers/matthias', (req, res, next) => {
  res.render('matthias');
});




router.get('/ironhackers/nele', (req, res, next) => {
  res.render('ironhackers/nele');
});

router.get('/ironhackers/carlos', (req, res, next) => {
  res.render('carlos');

router.get('/ironhack/ziggy', (req, res, next) => {
  res.render('/ziggy');

router.get('/ironhackers/maxence', (req, res, next) => {
  res.render('ironhackers/maxence');
});
router.get('/ironhackers/feli', (req, res, next) => {
  res.render('ironhackers/feli');
});

module.exports = router;
