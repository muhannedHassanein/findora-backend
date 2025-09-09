import Unit from "../models/Unit.js";

// إنشاء وحدة جديدة داخل مشروع
export const createUnit = async (req, res) => {
  try {
    const { projectId, name, area, rooms, price, paymentMethod, type, description, images } = req.body;

    const unit = await Unit.create({
      projectId,
      name,
      area,
      rooms,
      price,
      paymentMethod,
      type,
      description,
      images,
      createdBy: req.user.id, // الموظف اللي ضاف الوحدة
    });

    res.status(201).json(unit);
  } catch (error) {
    res.status(500).json({ message: "Error creating unit", error: error.message });
  }
};

// جلب كل الوحدات داخل مشروع
export const getUnitsByProject = async (req, res) => {
  try {
    const units = await Unit.find({ projectId: req.params.projectId }).populate("createdBy", "name email");
    res.json(units);
  } catch (error) {
    res.status(500).json({ message: "Error fetching units", error: error.message });
  }
};

// تعديل وحدة
export const updateUnit = async (req, res) => {
  try {
    const unit = await Unit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!unit) return res.status(404).json({ message: "Unit not found" });
    res.json(unit);
  } catch (error) {
    res.status(500).json({ message: "Error updating unit", error: error.message });
  }
};

// حذف وحدة
export const deleteUnit = async (req, res) => {
  try {
    const unit = await Unit.findByIdAndDelete(req.params.id);
    if (!unit) return res.status(404).json({ message: "Unit not found" });
    res.json({ message: "Unit deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting unit", error: error.message });
  }
};
