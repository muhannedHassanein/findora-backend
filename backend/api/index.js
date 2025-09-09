import express from "express";
import { createServer } from "http";
import authRoutes from "../routes/authRoutes.js";
import dotenv from "dotenv";
import connectDB from "../config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

export default app;
