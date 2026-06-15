const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:5000/api"
    : "https://ashnora-backend.onrender.com/api");

// Helper to get auth header
const getAuthHeaders = () => {
  const token = localStorage.getItem("ashnora_token");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

export const api = {
  // Auth APIs
  login: async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || "Login failed");
    }
    
    const data = await response.json();
    localStorage.setItem("ashnora_token", data.token);
    sessionStorage.setItem("ashnora_admin_logged_in", "true");
    return data;
  },

  logout: () => {
    localStorage.removeItem("ashnora_token");
    sessionStorage.removeItem("ashnora_admin_logged_in");
  },

  updatePassword: async (newPassword) => {
    const response = await fetch(`${API_BASE_URL}/auth/password`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ newPassword }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || "Failed to update password");
    }

    return await response.json();
  },

  // Inquiries (Surveys) APIs
  getInquiries: async () => {
    const response = await fetch(`${API_BASE_URL}/inquiries`, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error("Failed to fetch inquiries");
    return await response.json();
  },

  createInquiry: async (inquiryData) => {
    const response = await fetch(`${API_BASE_URL}/inquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inquiryData),
    });
    if (!response.ok) throw new Error("Failed to submit inquiry");
    return await response.json();
  },

  updateInquiry: async (id, status, date) => {
    const response = await fetch(`${API_BASE_URL}/inquiries/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ status, date }),
    });
    if (!response.ok) throw new Error("Failed to update inquiry");
    return await response.json();
  },

  deleteInquiry: async (id) => {
    const response = await fetch(`${API_BASE_URL}/inquiries/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error("Failed to delete inquiry");
    return await response.json();
  },

  // Quotations (Leads) APIs
  getQuotations: async () => {
    const response = await fetch(`${API_BASE_URL}/quotations`, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error("Failed to fetch quotations");
    return await response.json();
  },

  createQuotation: async (quotationData) => {
    const response = await fetch(`${API_BASE_URL}/quotations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quotationData),
    });
    if (!response.ok) throw new Error("Failed to submit quotation");
    return await response.json();
  },

  updateQuotation: async (id, status) => {
    const response = await fetch(`${API_BASE_URL}/quotations/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ status }),
    });
    if (!response.ok) throw new Error("Failed to update quotation");
    return await response.json();
  },

  deleteQuotation: async (id) => {
    const response = await fetch(`${API_BASE_URL}/quotations/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error("Failed to delete quotation");
    return await response.json();
  },

  // Blogs APIs
  getBlogs: async () => {
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("Failed to fetch blogs");
    return await response.json();
  },

  createBlog: async (blogData) => {
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(blogData),
    });
    if (!response.ok) throw new Error("Failed to create blog");
    return await response.json();
  },

  updateBlog: async (id, blogData) => {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(blogData),
    });
    if (!response.ok) throw new Error("Failed to update blog");
    return await response.json();
  },

  deleteBlog: async (id) => {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    if (!response.ok) throw new Error("Failed to delete blog");
    return await response.json();
  },
};
