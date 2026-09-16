const express = require("express");
const {
  captureLead,
  getLeads,
  syncLeads,
} = require("../controllers/leadController");

const router = express.Router();

router.post("/leads", captureLead);
router.get("/leads", getLeads);
router.get("/crm/sync", syncLeads);

module.exports = router;
