const express = require("express");
const bodyParser = require("body-parser");
const db = require("./DBConnection");
const app = express();
const cors = require("cors");
const PORT = 4004;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/upload`));

app.use(cors());
const route = require("./routes");
app.use("/tourist_guide_api", route);

app.listen(PORT, () => {
  console.log("Server created successfully");
});
