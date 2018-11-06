const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/ironhackers/gutu', (req, res, next) => {
  res.render('gutu')
})

module.exports = router;