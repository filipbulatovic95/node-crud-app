require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const productsRoutes = require("./routes/products.js");
const scheduleRoutes = require("./routes/scheduledSlots.js");
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  next();
});

//use routes
app.use("/api/products", productsRoutes);
app.use("/api/schedule", scheduleRoutes);

mongoose
  .connect(process.env.MONGOCONSTRING, {
    dbName: "BackendDB",
  })
  .then(() => {
    console.log("Connected to database!");
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
