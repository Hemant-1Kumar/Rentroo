import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mondodb.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

await connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Webhook Route
app.use("/api/clerk", clerkWebhooks);

// Clerk Middleware
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("API SUCCESSFULLY CONNECTED");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});