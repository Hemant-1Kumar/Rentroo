import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLDN_NAME,
  api_key: process.env.CLDN_API_KEY,
  api_secret: process.env.CLDN_API_SECRET,
});

try {
  const result = await cloudinary.uploader.upload(
    "C:/Users/heman/Desktop/test.png.jpeg"
  );

  console.log("UPLOAD SUCCESS");
  console.log(result.secure_url);
} catch (err) {
  console.log("UPLOAD FAILED");
  console.log(err);
}