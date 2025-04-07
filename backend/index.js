const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Selam Zeus Can, backend ayakta!");
});

app.listen(5000, () => {
  console.log("Backend çalışıyor: http://localhost:5000");
});
