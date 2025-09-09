// routes/authRoutes.js
import express from "express";
import {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";
import { authMiddleware, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

// مثال: حماية الروت
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to your profile", user: req.user });
});

// مثال: حماية الروت بالـ role
router.get("/admin", authMiddleware, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome Admin Panel" });
});

export default router;
