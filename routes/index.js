const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/ironhackers/maxence", (req, res, next) => {
  res.render("ironhackers/maxence");
});
router.get("/ironhackers/carlos", (req, res, next) => {
  res.render("carlos");
});
router.get("/ironhackers/ziggy", (req, res, next) => {
  res.render("/ziggy");
});
router.get("/ironhackers/maxence", (req, res, next) => {
  res.render("ironhackers/maxence");
});

router.get("/ironhackers/feli", (req, res, next) => {
  res.render("ironhackers/feli");
});

router.get("/ironhackers/anna", (req, res, next) => {
  res.render("ironhackers/anna");
});

router.get("/ironhackers/feli", (req, res, next) => {
  res.render("ironhackers/feli");
});

module.exports = router;
