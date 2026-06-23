# 🚗 Rentroo - Smart Car Rental Platform

Rentroo is a full-stack car rental platform built using the MERN stack that allows users to browse, book, and manage rental cars online. The platform features secure authentication, online payments, booking management, and a dedicated dashboard for car owners to manage their vehicles.

## 🌐 Live Demo

https://rentroo-gamma.vercel.app/

---

## ✨ Features

### User Features
- Secure Authentication with Clerk
- Browse and Search Cars
- View Car Details
- Book Cars Online
- Manage Bookings
- Responsive UI for All Devices

### Owner Features
- Owner Registration
- Dashboard Management
- Add New Cars
- Manage Car Listings
- View Customer Bookings
- Bulk Car Upload Support

### Additional Features
- Stripe Payment Integration
- Email Notifications using Nodemailer
- Protected Routes
- MongoDB Database Integration

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Clerk Authentication

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Third-Party Services
- Clerk
- Stripe
- Nodemailer
- Cloudinary

---

## 📁 Project Structure

```bash
Rentroo/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── config/
│
└── README.md
```

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/rentroo.git
cd rentroo
```

### Install Dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

### Environment Variables

Create a `.env` file in both client and server folders.

#### Client

```env
VITE_CLERK_PUBLISHABLE_KEY=your_key
VITE_BACKEND_URL=http://localhost:4000
```

#### Server

```env
MONGODB_URI=your_mongodb_uri

CLERK_SECRET_KEY=your_clerk_secret_key

STRIPE_SECRET_KEY=your_stripe_secret_key

CLDN_NAME=your_cloudinary_name
CLDN_API_KEY=your_cloudinary_api_key
CLDN_API_SECRET=your_cloudinary_api_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

---

## ▶️ Running the Project

Start Backend

```bash
cd server
npm run server
```

Start Frontend

```bash
cd client
npm run dev
```

---

## 📌 Main Modules

- Home Page
- Featured Cars
- Car Listings
- Car Details
- Booking System
- My Bookings
- Owner Dashboard
- Add Car
- List Cars
- Stripe Checkout
- Blog Page
- Contact Page

---

## 🔒 Authentication

Authentication and authorization are implemented using Clerk, providing:

- User Registration
- Login/Logout
- Session Management
- Protected Routes

---

## 💳 Payment Gateway

Stripe is integrated to provide secure online payments for vehicle bookings.

---

## 📧 Email Notifications

Nodemailer is used to send booking confirmations and important notifications to users.

---

## 🎯 Future Enhancements

- AI-Based Car Recommendations
- GPS Vehicle Tracking
- Mobile Application
- Customer Reviews & Ratings
- Multi-Language Support
- Analytics Dashboard

---

## 👨‍💻 Author

**Hemant Kumar**

- MCA Student, GL Bajaj Institute
- Front-End Development Intern at Cut Edge Technology Pvt. Ltd.

### Connect With Me

- GitHub: https://github.com/Hemant-1Kumar
- LinkedIn: https://linkedin.com/in/your-linkedin-profile

---

⭐ If you found this project useful, consider giving it a star on GitHub!
