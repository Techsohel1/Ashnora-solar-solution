import express from "express";
import Inquiry from "../models/Inquiry.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// @desc    Create new inquiry
// @route   POST /api/inquiries
// @access  Public
router.post("/", async (req, res) => {
  const { name, mobile, email, address, status, date } = req.body;

  try {
    const inquiry = new Inquiry({
      name,
      mobile,
      email,
      address,
      status,
      date,
    });

    const createdInquiry = await inquiry.save();
    res.status(201).json(createdInquiry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private
router.get("/", protect, async (req, res) => {
  try {
    const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Update inquiry status or date
// @route   PUT /api/inquiries/:id
// @access  Private
router.put("/:id", protect, async (req, res) => {
  const { status, date } = req.body;

  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (inquiry) {
      if (status !== undefined) inquiry.status = status;
      if (date !== undefined) inquiry.date = date;

      const updatedInquiry = await inquiry.save();
      res.json(updatedInquiry);
    } else {
      res.status(404).json({ message: "Inquiry not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Delete inquiry
// @route   DELETE /api/inquiries/:id
// @access  Private
router.delete("/:id", protect, async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (inquiry) {
      await Inquiry.deleteOne({ _id: req.params.id });
      res.json({ message: "Inquiry removed" });
    } else {
      res.status(404).json({ message: "Inquiry not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
