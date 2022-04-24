const express = require("express");
const app = express();
const port = 3000;
const ejs = require('ejs')

app.set('view engine', 'ejs')
app.use('/css',express.static(__dirname +'/css'));
app.use('/fonts',express.static(__dirname +'/fonts'));
app.use('/images',express.static(__dirname +'/images'));

app.use("/", require("./js/home"));
app.use("/about", require("./js/about"));
app.use("/services", require("./js/services"));
app.use("/contact", require("./js/contact"));
app.use("/gallery", require("./js/gallery"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);