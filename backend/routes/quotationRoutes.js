import express from "express";
import protect from "../middleware/authMiddleware.js";
import {postQuotation} from "../controller/quotation.js";
import {readQuotation} from "../controller/quotation.js";
import {updateQuotation} from "../controller/quotation.js";
import {deleteQuotation} from "../controller/quotation.js";


const router = express.Router();

// @desc    Create new quotation
// @route   POST /api/quotations
// @access  Public
router.post("/",postQuotation);

// @desc    Get all quotations
// @route   GET /api/quotations
// @access  Private
router.get("/", protect,readQuotation);

// @desc    Update quotation status
// @route   PUT /api/quotations/:id
// @access  Private
router.put("/:id", protect, updateQuotation);

// @desc    Delete quotation
// @route   DELETE /api/quotations/:id
// @access  Private
router.delete("/:id", protect, deleteQuotation);

export default router;
