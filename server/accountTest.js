import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLDN_NAME,
  api_key: process.env.CLDN_API_KEY,
  api_secret: process.env.CLDN_API_SECRET,
});

try {
  const ping = await cloudinary.api.ping();
  console.log("PING SUCCESS");
  console.log(ping);

  const usage = await cloudinary.api.usage();
  console.log("USAGE SUCCESS");
  console.log(usage);
} catch (err) {
  console.log("ERROR");
  console.log(err);
}