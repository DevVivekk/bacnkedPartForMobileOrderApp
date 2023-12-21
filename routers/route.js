const express = require("express");
const getphonelist = require("../controllers/getphonelist");
const PhoneOrder = require("../controllers/postphoneorders");
const router = new express.Router();
router.get("/getphones",getphonelist);
router.post('/phoneorder',PhoneOrder);
module.exports= router;
