import express from "express";
import Blog from "../models/Blog.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Create a blog
// @route   POST /api/blogs
// @access  Private
router.post("/", protect, async (req, res) => {
  const { title, image, description, date } = req.body;

  try {
    const blog = new Blog({
      title,
      image: image || undefined,
      description,
      date: date || undefined,
    });

    const createdBlog = await blog.save();
    res.status(201).json(createdBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Private
router.put("/:id", protect, async (req, res) => {
  const { title, image, description, date } = req.body;

  try {
    const blog = await Blog.findById(req.params.id);

    if (blog) {
      if (title !== undefined) blog.title = title;
      if (image !== undefined) blog.image = image;
      if (description !== undefined) blog.description = description;
      if (date !== undefined) blog.date = date;

      const updatedBlog = await blog.save();
      res.json(updatedBlog);
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
// @access  Private
router.delete("/:id", protect, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (blog) {
      await Blog.deleteOne({ _id: req.params.id });
      res.json({ message: "Blog removed" });
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
