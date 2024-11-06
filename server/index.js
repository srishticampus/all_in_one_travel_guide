const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/DBConnection");
const app = express();
const cors = require("cors");
const PORT = 4050;
const { touristRoutes } = require("./tourist/tourist.routes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/upload`));

app.use(cors());
const route = require("./routes");
const { errorHandler } = require("./middleware/errorHandler");
const { authRoutes } = require("./auth/auth.routes");
app.get("/travel_guide_api", (req, res) => {
  res.send(
    "Server running successfully on http://localhost:4050/travel_guide_api/"
  );
});
// app.use("/tourist_guide_api", route);
app.use("/travel_guide_api/auth", authRoutes);
app.use("/travel_guide_api/tourist", touristRoutes);
app.use(errorHandler);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server created successfully on http://localhost:${PORT}/travel_guide_api`
      );
    });
  })
  .catch((err) => {
    console.log("Error on connect db", err);
  });
