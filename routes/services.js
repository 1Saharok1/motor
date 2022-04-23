const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(process.cwd()+"/services.html"))
    .post((req, res) => res.send("POST SERVICES"));
module.exports = router;