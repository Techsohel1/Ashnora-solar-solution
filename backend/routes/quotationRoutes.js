import express from "express";
import Quotation from "../models/Quotation.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// @desc    Create new quotation
// @route   POST /api/quotations
// @access  Public
router.post("/", async (req, res) => {
  const { name, mobile, email, address, status, date } = req.body;

  try {
    const quotation = new Quotation({
      name,
      mobile,
      email,
      address,
      status,
      date,
    });

    const createdQuotation = await quotation.save();
    res.status(201).json(createdQuotation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Get all quotations
// @route   GET /api/quotations
// @access  Private
router.get("/", protect, async (req, res) => {
  try {
    const quotations = await Quotation.find({}).sort({ createdAt: -1 });
    res.json(quotations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Update quotation status
// @route   PUT /api/quotations/:id
// @access  Private
router.put("/:id", protect, async (req, res) => {
  const { status } = req.body;

  try {
    const quotation = await Quotation.findById(req.params.id);

    if (quotation) {
      if (status !== undefined) quotation.status = status;

      const updatedQuotation = await quotation.save();
      res.json(updatedQuotation);
    } else {
      res.status(404).json({ message: "Quotation not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Delete quotation
// @route   DELETE /api/quotations/:id
// @access  Private
router.delete("/:id", protect, async (req, res) => {
  try {
    const quotation = await Quotation.findById(req.params.id);

    if (quotation) {
      await Quotation.deleteOne({ _id: req.params.id });
      res.json({ message: "Quotation removed" });
    } else {
      res.status(404).json({ message: "Quotation not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
