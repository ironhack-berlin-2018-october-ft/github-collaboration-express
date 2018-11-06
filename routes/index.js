const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/ironhack/ziggy', (req, res, next) => {
  res.render('/ziggy');
});

module.exports = router;
