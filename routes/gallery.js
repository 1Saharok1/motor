const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(process.cwd()+"/gallery.html"))
    .post((req, res) => res.send("POST GALLERY"));
module.exports = router;