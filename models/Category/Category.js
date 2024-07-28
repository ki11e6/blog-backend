import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, "name must be at least 3 characters"],
    maxlength: [50, "name can not be more than 100 characters"],
  },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
