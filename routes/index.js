const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

<<<<<<< HEAD
router.get('/ironhackers/nele', (req, res, next) => {
  res.render('ironhackers/nele');
});

=======
<<<<<<< HEAD
router.get('/ironhackers/carlos', (req, res, next) => {
  res.render('carlos');
=======
<<<<<<< HEAD
router.get('/ironhack/ziggy', (req, res, next) => {
  res.render('/ziggy');
=======
router.get('/ironhackers/maxence', (req, res, next) => {
  res.render('ironhackers/maxence');
>>>>>>> 46a86bd6a667b08992ed50649a7e957eb152336e
});
router.get('/ironhackers/feli', (req, res, next) => {
  res.render('ironhackers/feli');
>>>>>>> 2e9de92079f6a08ed6841f0c2ca6e5da1d8187d5
});
>>>>>>> 953a012ae0db7ae3a7ca487cf5829fc12ed822af

module.exports = router;
