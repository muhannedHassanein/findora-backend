import express from "express";
import { createProject, getProjects, updateProject, deleteProject } from "../controllers/projectController.js";
import { authMiddleware  } from "../middleware/authMiddleware.js";

const router = express.Router();

// إنشاء مشروع (محتاج تسجيل دخول)
router.post("/", authMiddleware, createProject);

// جلب كل المشاريع
router.get("/", getProjects);

// تعديل مشروع
router.put("/:id", authMiddleware, updateProject);

// حذف مشروع
router.delete("/:id", authMiddleware, deleteProject);

export default router;
