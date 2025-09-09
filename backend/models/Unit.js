import mongoose from "mongoose";

const unitSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    name: { type: String, required: true },
    area: { type: Number, required: true },
    rooms: { type: Number },
    price: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["كاش", "تقسيط"], default: "كاش" },
    type: { type: String, enum: ["شقة", "فيلا", "شاليه"], required: true },
    description: { type: String },
    images: [{ type: String }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // الموظف اللي ضاف الوحدة
      required: true,
    },
  },
  { timestamps: true }
);

const Unit = mongoose.model("Unit", unitSchema);
export default Unit;
