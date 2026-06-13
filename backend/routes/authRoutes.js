import express from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Generate Token helper
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// @desc    Auth admin & get token
// @route   POST /api/auth/login
// @access  Public
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (admin && (await admin.matchPassword(password))) {
      res.json({
        _id: admin._id,
        username: admin.username,
        token: generateToken(admin._id),
      });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Update admin password
// @route   PUT /api/auth/password
// @access  Private
router.put("/password", protect, async (req, res) => {
  const { newPassword } = req.body;

  if (!newPassword || newPassword.length < 4) {
    return res.status(400).json({ message: "Password must be at least 4 characters long" });
  }

  try {
    const admin = await Admin.findById(req.admin._id);

    if (admin) {
      admin.password = newPassword;
      await admin.save();
      res.json({ message: "Password updated successfully" });
    } else {
      res.status(404).json({ message: "Admin not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
