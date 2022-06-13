const router = require("express").Router();
const postMail = require("./controllers/contactController");

router.post("/contact", postMail);

module.exports = router;
