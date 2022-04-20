const express = require("express");
const app = express();
const port = 3000;
app.use("/", require("./routes/home"));
app.use("/about", require("./routes/about"));
app.use("/profile", require("./routes/profile"));
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);


