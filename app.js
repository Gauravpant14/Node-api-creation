const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const { MONGOURI } = require("./Keys");

require("./models/user");

app.use(express.json()); //kind of middleware to parse the incoming data to json and use this before the route
app.use(require("./routes/auth"));

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});

mongoose.connection.on("error", (err) => {
  console.log("error while connecting to db", err);
});

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
