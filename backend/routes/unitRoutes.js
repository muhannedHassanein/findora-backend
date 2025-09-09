import express from "express";
import { createUnit, getUnitsByProject, updateUnit, deleteUnit } from "../controllers/unitController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// إنشاء وحدة authMiddleware داخل مشروع
router.post("/", authMiddleware, createUnit);

// جلب كل الوحدات داخل مشروع
router.get("/:projectId", getUnitsByProject);

// تعديل وحدة
router.put("/:id", authMiddleware, updateUnit);

// حذف وحدة
router.delete("/:id", authMiddleware, deleteUnit);

export default router;
