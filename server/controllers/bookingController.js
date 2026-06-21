import Booking from "../models/Booking.js";
import Car from "../models/Car.js";
import Agency from "../models/Agency.js";
import stripe from "stripe";
import transporter from "../config/nodemailer.js";

const checkAvailability = async ({ car, pickUpDate, dropOffDate }) => {
  try {
    const bookings = await Booking.find({
      car,
      pickUpDate: { $lte: dropOffDate },
      dropOffDate: { $gte: pickUpDate },
    });
    const isAvailable = bookings.length === 0;
    return isAvailable;
  } catch (error) {
    console.log(error.message);
  }
};

export const checkBookingAvailability = async (req, res) => {
  try {
    const { car, pickUpDate, dropOffDate } = req.body;
    const isAvailable = await checkAvailability({
      car,
      pickUpDate,
      dropOffDate,
    });
    res.json({ success: true, isAvailable });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const bookingCreate = async (req, res) => {
  try {
    const { car, pickUpDate, dropOffDate } = req.body;
    const user = req.user._id;

    const isAvailable = await checkAvailability({
      car,
      pickUpDate,
      dropOffDate,
    });
    if (!isAvailable) {
      return res.json({ success: false, message: "Car is not available" });
    }

    const carData = await Car.findById(car);
    let totalPrice = carData.price.rent;

    const pickUp = new Date(pickUpDate);
    const dropOff = new Date(dropOffDate);
    const timeDiff = dropOff.getTime() - pickUp.getTime();
    const days = Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)));

    totalPrice *= days;

    const booking = await Booking.create({
      user,
      car,
      agency: carData.agency,
      pickUpDate,
      dropOffDate,
      totalPrice,
    });

    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: req.user.email,
      subject: "Car Booking/Sale",
      html: `
                <h2>Your Booking Details</h2>
                <p> Thank You for your  booking! Below are your booking details:</p>
                <ul>
                    <li><strong>Booking ID:</strong> ${booking._id}</li>
                    <li><strong>Agency Name:</strong>${carData.agency.name}</li>
                    <li><strong>Location:</strong>${carData.address}</li>
                    <li><strong>Date:</strong>${booking.pickUpDate.toDateString()}-${booking.dropOffDate.toDateString()}</li>
                    <li><strong>Booking Amount:</strong> ${process.env.CURRENCY || "$"}${
                      booking.totalPrice
                    }for ${days} days</li>
                    </ul>
                    <p> We are excited to welcome you soon.</p>
                    <p>Need to change something? Contact us.</p>
                    
            `,
    };

    await transporter.sendMail(mailOption)

    res.json({ success: true, message: "Booking Created" });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    const user = req.user._id;
    const bookings = await Booking.find({ user })
      .populate("car agency")
      .sort({ createdAt: -1 });

    res.json({ success: true, bookings });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to get Bookings",
    });
  }
};

export const getAgencyBookings = async (req, res) => {
  try {
    const user = req.user._id;
    const agency = await Agency.findOne({ owner: req.auth().userId });
    if (!agency) {
      return res.json({ success: false, message: "No Agency found" });
    }

    const bookings = await Booking.find({ agency: agency._id })
      .populate("car agency user")
      .sort({ createdAt: -1 });
    const totalBookings = bookings.length;
    const totalRevenue = bookings.reduce(
      (acc, b) => acc + (b.isPaid ? b.totalPrice : 0),
      0,
    );
    res.json({
      success: true,
      dashboardData: { totalBookings, totalRevenue, bookings },
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to get Agency Bookings",
    });
  }
};

export const bookingStripePayment = async (req, res) => {
  try {
    const {bookingId}=req.body
    const booking= await Booking.findById(bookingId)
    const carData= await Car.findById(booking.car).populate("agency")
    const totalPrice = booking.totalPrice
    const {origin}=req.headers

    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)
    const line_items=[
        {
            price_data:{
                currency:"usd",
                product_data:{name:carData.agency.name},
                unit_amount: totalPrice*100,
            },
            quantity:1,
        }
    ]

    const session = await stripeInstance.checkout.sessions.create({
        line_items,
        mode:"payment",
        success_url: `${origin}/processing/my-bookings`,
        cancel_url: `${origin}/my-bookings`,
        metadata:{bookingId}
    })

    res.json({success:true, url:session.url})
  } catch (error) {
    res.json({success: false, message:"Payment Failed"})
  }
};
