const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(process.cwd()+"/html/contact.ejs"))
    .post((req, res) => res.send("POST CONTACT"));
module.exports = router;