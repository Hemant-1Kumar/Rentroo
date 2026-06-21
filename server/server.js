import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mondodb.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoute.js";
import agencyRouter from "./routes/agencyRoute.js";
import connectCloudinary from "./config/cloudinary.js";
import carRouter from "./routes/carRoute.js"
import bookingRouter from "./routes/bookingRoute.js";
import { stripeWebhooks } from "./controllers/stripeWebhooks.js";

await connectDB();
await connectCloudinary();

const app = express();

app.use(cors());

app.post('/api/stripe',express.raw({type:"application/json"}),stripeWebhooks)
app.use(express.json());

// Webhook Route
app.use(cors());
app.use(express.json());

// Clerk Middleware
app.use(clerkMiddleware());

// Webhook Route
app.use("/api/clerk", clerkWebhooks);

app.use('/api/user', userRouter);
app.use('/api/agencies', agencyRouter);
app.use('/api/cars', carRouter);
app.use('/api/bookings', bookingRouter);

app.get("/", (req, res) => {
  res.send("API SUCCESSFULLY CONNECTED");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});