require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const pageRoutes = require("./routes/pageRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", pageRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Database connection check
db.getConnection()
  .then((connection) => {
    console.log("Connected to Hostinger MySQL database");
    connection.release();
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
