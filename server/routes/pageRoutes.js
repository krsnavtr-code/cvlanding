const express = require("express");
const { getPageBySubdomain } = require("../controllers/pageController");

const router = express.Router();

router.get("/pages/:subdomain", getPageBySubdomain);

module.exports = router;
