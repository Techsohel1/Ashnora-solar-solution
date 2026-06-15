import express from "express";
import protect from "../middleware/authMiddleware.js";
import { postBlog } from "../controller/blogController.js";
import { readBlog } from "../controller/blogController.js";
import { updateBlog } from "../controller/blogController.js";
import { deleteBlog } from "../controller/blogController.js";

const BlogRouter = express.Router();

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public
BlogRouter.get("/", readBlog);

// @desc    Create a blog
// @route   POST /api/blogs
// @access  Private
BlogRouter.post("/", protect, postBlog);

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Private
BlogRouter.put("/:id", protect, updateBlog );

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
// @access  Private
BlogRouter.delete("/:id", protect, deleteBlog);

export default BlogRouter;
