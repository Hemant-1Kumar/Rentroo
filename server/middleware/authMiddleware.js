import User from "../models/User.js";

export const authUser = async (req, res, next) => {
  try {

    const auth = await req.auth();

    const { userId } = auth;

    if (!userId) {
      return res.json({
        success: false,
        message: "Not Authorized",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.json({
        success: false,
        message: "User not found in MongoDB",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};