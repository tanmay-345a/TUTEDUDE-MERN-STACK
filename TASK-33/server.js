const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
console.log("Mongo URI starts with:", process.env.MONGO_URI?.slice(0, 14));

const app = express();

app.use(cors());
app.use(express.json());

const todoRoutes = require("./routes/todoRoutes");

console.log("MY SERVER.JS IS RUNNING");

app.get("/", (req, res) => {
  res.send("To-Do API is running");
});

app.use("/api/todos", todoRoutes);


const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });