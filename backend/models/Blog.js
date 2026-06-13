import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: () => {
        return new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      },
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
