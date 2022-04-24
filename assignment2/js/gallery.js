const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(process.cwd()+"/html/gallery.ejs"))
    .post((req, res) => res.send("POST GALLERY"));
module.exports = router;