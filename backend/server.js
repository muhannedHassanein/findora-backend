// server.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import unitRoutes from "./routes/unitRoutes.js";

dotenv.config();

// Connect DB
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/units", unitRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`✅ MongoDB Connected`);

  // اطبع اللينكات الجاهزة للتجربة
  console.log(`📌 Try the API in Postman:`);
  console.log(`➡️ Register:       http://localhost:${PORT}/api/auth/register`);
  console.log(`➡️ Login:          http://localhost:${PORT}/api/auth/login`);
  console.log(`➡️ Projects:       http://localhost:${PORT}/api/projects`);
  console.log(`➡️ Units (by proj):http://localhost:${PORT}/api/units/:projectId`);
});
