const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/ironhackers/gutu", (req, res, next) => {
  res.render("gutu");
});

router.get("/ironhackers/nele", (req, res, next) => {
  res.render("ironhackers/nele");
});

router.get("/ironhackers/carlos", (req, res, next) => {
  res.render("carlos");
});
router.get("/ironhack/ziggy", (req, res, next) => {
  res.render("/ziggy");
});
router.get("/ironhackers/maxence", (req, res, next) => {
  res.render("ironhackers/maxence");
});
router.get("/ironhackers/carlos", (req, res, next) => {
  res.render("carlos");
});
router.get("/ironhackers/anna", (req, res, next) => {
  res.render("ironhackers/anna");
});

router.get("/ironhackers/carlos", (req, res, next) => {
  res.render("carlos");
});

router.get("/ironhack/ziggy", (req, res, next) => {
  res.render("/ziggy");
});

router.get("/ironhackers/maxence", (req, res, next) => {
  res.render("ironhackers/maxence");
});

router.get("/ironhackers/feli", (req, res, next) => {
  res.render("ironhackers/feli");
});

router.get("/ironhackers/samanta", (req, res, next) => {
  res.render("ironhackers/samanta");
});
router.get("/ironhackers/feli", (req, res, next) => {
  res.render("ironhackers/feli");
});

router.get("/ironhackers/khalil", (req, res, next) => {
  res.render("ironhackers/khalil");
});

router.get("/ironhackers/axel", (req, res, next) => {
  res.render("ironhackers/axel");
});

module.exports = router;
