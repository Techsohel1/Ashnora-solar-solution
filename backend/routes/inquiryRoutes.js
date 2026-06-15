import express from "express";
import protect from "../middleware/authMiddleware.js";
import {postInquiry} from "../controller/inquiry.js";
import {readInquiry} from "../controller/inquiry.js";
import {updateInquiry} from "../controller/inquiry.js";
import {deleteInquiry} from "../controller/inquiry.js";


const Inquieryrouter = express.Router();

// @desc    Create new inquiry
// @route   POST /api/inquiries
// @access  Public
Inquieryrouter.post("/", postInquiry);

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private
Inquieryrouter.get("/", protect, readInquiry);

// @desc    Update inquiry status or date
// @route   PUT /api/inquiries/:id
// @access  Private
Inquieryrouter.put("/:id", protect, updateInquiry);

// @desc    Delete inquiry
// @route   DELETE /api/inquiries/:id
// @access  Private
Inquieryrouter.delete("/:id", protect, deleteInquiry);

export default Inquieryrouter;
