import { useState, useEffect } from "react";
import { 
  FaSearch, 
  FaTrash, 
  FaPlus, 
  FaTimes, 
  FaImage, 
  FaCalendarAlt, 
  FaEdit, 
  FaFileAlt 
} from "react-icons/fa";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Modals state
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null); // stores blog object if editing

  // Form states
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [blogDate, setBlogDate] = useState("");

  // Load blogs
  const loadBlogs = () => {
    const stored = JSON.parse(localStorage.getItem("ashnora_blogs") || "[]");
    setBlogs(stored);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  // Format Date Helper
  const getTodayDateFormatted = () => {
    return new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  };

  // Submit Add/Edit Form
  const handleBlogFormSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and description are required!");
      return;
    }

    const finalImage = imageUrl || "https://images.unsplash.com/photo-1509391366360-2e959784a276";
    const finalDate = blogDate ? new Date(blogDate).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }) : getTodayDateFormatted();

    let updatedBlogs = [];

    if (editingBlog) {
      // Edit mode
      updatedBlogs = blogs.map((item) => {
        if (item.id === editingBlog.id) {
          return {
            ...item,
            title,
            image: finalImage,
            description,
            date: finalDate
          };
        }
        return item;
      });
    } else {
      // Add mode
      const newBlog = {
        id: "blog_" + Date.now(),
        title,
        image: finalImage,
        description,
        date: finalDate
      };
      updatedBlogs = [newBlog, ...blogs];
    }

    localStorage.setItem("ashnora_blogs", JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);

    // Reset Form
    setTitle("");
    setImageUrl("");
    setDescription("");
    setBlogDate("");
    setEditingBlog(null);
    setShowAddModal(false);
  };

  // Open Edit Modal
  const openEditModal = (blog) => {
    setEditingBlog(blog);
    setTitle(blog.title);
    setImageUrl(blog.image);
    setDescription(blog.description);
    // Try converting the date string back to date format for input if possible, or just reset it
    setBlogDate("");
    setShowAddModal(true);
  };

  // Delete Blog
  const handleDeleteBlog = (id) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      const filtered = blogs.filter((item) => item.id !== id);
      localStorage.setItem("ashnora_blogs", JSON.stringify(filtered));
      setBlogs(filtered);
    }
  };

  // Filter Logic
  const filteredBlogs = blogs.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      {/* Top action section */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        
        {/* Search bar */}
        <div className="relative w-full sm:w-80">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-[#00539B] text-sm shadow-sm"
          />
        </div>

        {/* Add New Blog Button */}
        <button
          onClick={() => {
            setEditingBlog(null);
            setTitle("");
            setImageUrl("");
            setDescription("");
            setBlogDate("");
            setShowAddModal(true);
          }}
          className="bg-[#00539B] hover:bg-[#00427c] text-white font-semibold text-sm px-5 py-3 rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center cursor-pointer"
        >
          <FaPlus size={14} />
          <span>Add New Post</span>
        </button>

      </div>

      {/* Blogs Table Grid */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          {filteredBlogs.length > 0 ? (
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-600 font-bold text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Blog Post Details</th>
                  <th className="px-6 py-4">Publish Date</th>
                  <th className="px-6 py-4">Excerpt</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredBlogs.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/40 transition">
                    {/* Thumbnail & Title */}
                    <td className="px-6 py-4 max-w-sm">
                      <div className="flex items-center gap-4">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-16 h-12 rounded-lg object-cover border border-gray-200 shrink-0"
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1509391366360-2e959784a276";
                          }}
                        />
                        <div className="truncate max-w-[240px]">
                          <div className="font-semibold text-gray-850 text-sm whitespace-normal leading-snug">{item.title}</div>
                        </div>
                      </div>
                    </td>
                    
                    {/* Date */}
                    <td className="px-6 py-4 text-gray-500 font-semibold text-xs">
                      {item.date}
                    </td>

                    {/* Excerpt */}
                    <td className="px-6 py-4 text-gray-500 text-xs max-w-xs truncate">
                      {item.description}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {/* Edit Button */}
                        <button
                          onClick={() => openEditModal(item)}
                          title="Edit Blog"
                          className="p-2 bg-gray-50 hover:bg-[#00539B] text-gray-500 hover:text-white rounded-lg border border-gray-200 hover:border-[#00539B] transition duration-300 cursor-pointer"
                        >
                          <FaEdit size={14} />
                        </button>
                        
                        {/* Delete Button */}
                        <button
                          onClick={() => handleDeleteBlog(item.id)}
                          title="Delete Blog"
                          className="p-2 bg-gray-50 hover:bg-red-500 text-gray-500 hover:text-white rounded-lg border border-gray-200 hover:border-red-500 transition duration-300 cursor-pointer"
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-16 text-center">
              <FaFileAlt size={48} className="text-gray-200 mx-auto mb-4" />
              <h4 className="font-bold text-gray-800 text-lg">No Blog Posts Found</h4>
              <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto">
                No blog posts match your current search terms. Click "Add New Post" to write one!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ADD/EDIT BLOG MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative animate-slide-up">
            
            {/* Modal Close */}
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 p-2 bg-gray-150 rounded-full text-gray-600 hover:text-red-500 transition cursor-pointer"
            >
              <FaTimes size={16} />
            </button>

            {/* Modal Header */}
            <div className="bg-[#00539B] text-white p-6">
              <h3 className="text-xl font-bold">{editingBlog ? "Edit Blog Post" : "Add New Blog Post"}</h3>
              <p className="text-xs text-blue-100 mt-1">Create or update clean solar energy blogs.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleBlogFormSubmit} className="p-6 space-y-4">
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1.5">
                  Post Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter blog title"
                  className="w-full px-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:border-[#00539B] text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1.5">
                  Image URL
                </label>
                <div className="relative">
                  <FaImage className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="w-full pl-10 pr-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:border-[#00539B] text-sm"
                  />
                </div>
                <p className="text-[10px] text-gray-400 mt-1">Leave empty to use a default high-quality solar image.</p>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1.5">
                  Publish Date
                </label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="date"
                    value={blogDate}
                    onChange={(e) => setBlogDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:border-[#00539B] text-sm text-gray-700"
                  />
                </div>
                <p className="text-[10px] text-gray-400 mt-1">Leave empty to set publication date to today.</p>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1.5">
                  Excerpt / Content <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter a brief excerpt or body text..."
                  className="w-full px-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:border-[#00539B] text-sm"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="w-1/2 border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold py-3 rounded-xl transition duration-300 cursor-pointer text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-[#00539B] hover:bg-[#00427c] text-white font-semibold py-3 rounded-xl transition duration-300 cursor-pointer text-sm"
                >
                  {editingBlog ? "Save Changes" : "Publish Post"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Blogs;
