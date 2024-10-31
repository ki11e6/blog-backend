import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "@fluidjs/multer-cloudinary";
import multer from "multer";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

// Configure instance of CloudinaryStorage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // Optional: Folder for uploaded files in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"], // Optional: Restrict allowed file types
    transformation: [{ width: 500, height: 500, crop: "limit" }], // Optional: Apply image transformations on upload
  },
});

// Configure Multer instance
const upload = multer({ storage: storage });

export { upload };
