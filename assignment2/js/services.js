const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(process.cwd()+"/html/services.ejs"))
    .post((req, res) => res.send("POST SERVICES"));
module.exports = router;