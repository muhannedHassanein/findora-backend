import Project from "../models/Project.js";

// إنشاء مشروع جديد (بيعمله صاحب الشركة)
export const createProject = async (req, res) => {
  try {
    const { name, location, description } = req.body;

    const project = await Project.create({
      name,
      location,
      description,
      createdBy: req.user.id, // صاحب الشركة
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Error creating project", error: error.message });
  }
};

// جلب كل المشاريع
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("createdBy", "name email");
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error: error.message });
  }
};

// تعديل مشروع
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Error updating project", error: error.message });
  }
};

// حذف مشروع
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting project", error: error.message });
  }
};
