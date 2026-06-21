// testCloudinary.js

import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLDN_NAME,
  api_key: process.env.CLDN_API_KEY,
  api_secret: process.env.CLDN_API_SECRET,
});

try {
  const result = await cloudinary.api.ping();
  console.log("SUCCESS:", result);
} catch (error) {
  console.log("ERROR:", error);
}