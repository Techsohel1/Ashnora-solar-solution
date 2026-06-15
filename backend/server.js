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

connectDB();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://ashnora-solar-solution.vercel.app",
  "https://ashnora-solar-solution-17ph.vercel.app"
];

if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      
      // Allow any Vercel deployment preview url matching the project prefix
      if (/^https:\/\/ashnora-solar-solution-[a-z0-9-]+\.vercel\.app$/.test(origin)) {
        return callback(null, true);
      }
      
      return callback(new Error("Not allowed by CORS"), false);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
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
