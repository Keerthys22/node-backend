const connectDB = require("./config/db");
const noteRoutes = require("./routes/noteRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send("Notes API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});