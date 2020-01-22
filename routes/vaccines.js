const express = require("express");
const router = express.Router();
const {
  VaccineList,
  create,
  deleteVaccine
} = require("../controllers/vaccine");

router.get("/", VaccineList);

router.post("/create", express.json(), create);

router.delete("/delete/:id", express.json(), deleteVaccine);

module.exports = router;
