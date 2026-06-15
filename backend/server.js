import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import AdminRouter from "./routes/authRoutes.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";
import quotationRoutes from "./routes/quotationRoutes.js";
import BlogRouter from "./routes/blogRoutes.js";
import Admin from "./models/Admin.js";

// Load env variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", AdminRouter);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/quotations", quotationRoutes);
app.use("/api/blogs", BlogRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Ashnora Solar Solution API is running...");
});

// Seed default admin if DB is empty
const seedDefaultAdmin = async () => {
  try {
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      const defaultAdmin = new Admin({
        username: "admin",
        password: "admin123",
      });
      await defaultAdmin.save();
      console.log("Default admin seeded: admin / admin123");
    }
  } catch (error) {
    console.error(`Admin seeding failed: ${error.message}`);
  }
};



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
 
});
