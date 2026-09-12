const express = require("express");
const { captureLead, getLeads } = require("../controllers/leadController");

const router = express.Router();

router.post("/leads", captureLead);
router.get("/leads", getLeads);

module.exports = router;
