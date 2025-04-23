const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes")
const sendDatabase = require("./db/send")

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api",bookRoutes)

const PORT = process.env.PORT || 5000;
const MONGO_URL = "mongodb://0.0.0.0:27017/bookStore";

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB ");
    sendDatabase();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
