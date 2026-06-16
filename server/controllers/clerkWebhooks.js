import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    await whook.verify(JSON.stringify(req.body), headers);

    const { data, type } = req.body;

    console.log("Webhook Event:", type);

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          username: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          image: data.image_url,
          recentSearchedCities: "",
        };

        await User.create(userData);

        console.log("User Created:", userData);
        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          username: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          image: data.image_url,
        };

        await User.findByIdAndUpdate(data.id, userData);

        console.log("User Updated:", data.id);
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);

        console.log("User Deleted:", data.id);
        break;
      }

      default:
        console.log("Unhandled Event:", type);
        break;
    }

    res.status(200).json({
      success: true,
      message: "Webhook Received",
    });
  } catch (error) {
    console.log("WEBHOOK ERROR:");
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default clerkWebhooks;