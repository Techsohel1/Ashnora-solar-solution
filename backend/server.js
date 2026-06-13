import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";
import quotationRoutes from "./routes/quotationRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import Admin from "./models/Admin.js";
import Blog from "./models/Blog.js";

// Load env variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/quotations", quotationRoutes);
app.use("/api/blogs", blogRoutes);

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
        password: "admin123", // Will be automatically encrypted by mongoose pre-save hook
      });
      await defaultAdmin.save();
      console.log("Default admin seeded: admin / admin123");
    }
  } catch (error) {
    console.error(`Admin seeding failed: ${error.message}`);
  }
};

// Seed default blogs if DB is empty
const seedDefaultBlogs = async () => {
  try {
    const blogCount = await Blog.countDocuments();
    if (blogCount === 0) {
      const defaultBlogs = [
        {
          title: "The Truth About Free Solar Government Marketing",
          image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
          description: "Learn how solar energy can help reduce electricity costs while creating a sustainable future.",
          date: "11 June 2026",
        },
        {
          title: "Is Solar Worth It for Small Businesses?",
          image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
          description: "Explore the financial advantages and environmental impacts of solar transition for small enterprises.",
          date: "10 June 2026",
        },
        {
          title: "How Solar Panels Increase Property Value",
          image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
          description: "Solar installations not only save on bills but directly boost residential and commercial valuation.",
          date: "09 June 2026",
        },
        {
          title: "5 Mistakes Before Installing Solar Panels",
          image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
          description: "Avoid these common planning pitfalls to ensure your investment returns maximum power generation.",
          date: "08 June 2026",
        },
        {
          title: "Rooftop Solar vs Traditional Electricity",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
          description: "A head-to-head comparison of efficiency, costs, reliability, and modern smart grid options.",
          date: "07 June 2026",
        },
        {
          title: "Why Solar Energy is the Future of Rajasthan",
          image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b",
          description: "Analyzing the policy incentives, geographical positioning, and sunlight distribution of the state.",
          date: "06 June 2026",
        },
      ];
      await Blog.insertMany(defaultBlogs);
      console.log("Default blogs seeded successfully");
    }
  } catch (error) {
    console.error(`Blog seeding failed: ${error.message}`);
  }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
  seedDefaultAdmin();
  seedDefaultBlogs();
});
