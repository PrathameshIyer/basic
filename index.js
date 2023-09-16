const express = require("express");
const app = express();

app.use("/", (req, res) => {
    res.send("hello hi")
});
  
app.listen(8000);
  