import { useState, useEffect } from "react";
import { 
  FaSearch, 
  FaTrash, 
  FaEye, 
  FaPlus, 
  FaTimes, 
  FaUser, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaInfoCircle,
  FaFileInvoiceDollar 
} from "react-icons/fa";

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  
  // Modals state
  const [selectedLead, setSelectedLead] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  
  // New Lead Form state
  const [newName, setNewName] = useState("");
  const [newMobile, setNewMobile] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newStatus, setNewStatus] = useState("New");

  // Load leads
  const loadLeads = () => {
    const storedQuotes = JSON.parse(localStorage.getItem("ashnora_quotations") || "[]");
    setLeads(storedQuotes);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  // Update Status
  const handleStatusChange = (id, newStatusVal) => {
    const updated = leads.map((item) => {
      if (item.id === id) {
        return { ...item, status: newStatusVal };
      }
      return item;
    });
    localStorage.setItem("ashnora_quotations", JSON.stringify(updated));
    setLeads(updated);
    
    // Update active modal details if open
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead({ ...selectedLead, status: newStatusVal });
    }
  };

  // Delete Lead
  const handleDeleteLead = (id) => {
    if (window.confirm("Are you sure you want to delete this quotation request?")) {
      const filtered = leads.filter((item) => item.id !== id);
      localStorage.setItem("ashnora_quotations", JSON.stringify(filtered));
      setLeads(filtered);
      if (selectedLead && selectedLead.id === id) {
        setSelectedLead(null);
      }
    }
  };

  // Add Manual Lead
  const handleAddLeadSubmit = (e) => {
    e.preventDefault();
    if (!newName || !newMobile) {
      alert("Name and Mobile Number are required!");
      return;
    }

    const newQuote = {
      id: "quote_" + Date.now(),
      name: newName,
      mobile: newMobile,
      email: newEmail || "N/A",
      address: newAddress || "N/A",
      status: newStatus,
      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }) + ", " + new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updated = [newQuote, ...leads];
    localStorage.setItem("ashnora_quotations", JSON.stringify(updated));
    setLeads(updated);

    // Reset Form & Close Modal
    setNewName("");
    setNewMobile("");
    setNewEmail("");
    setNewAddress("");
    setNewStatus("New");
    setShowAddModal(false);
  };

  // Filter Logic
  const filteredLeads = leads.filter((item) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.mobile.includes(searchTerm) ||
      (item.email && item.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.address && item.address.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Get status color styling
  const getStatusClasses = (status) => {
    switch (status) {
      case "New":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "Contacted":
        return "bg-blue-50 text-[#00539B] border-blue-200";
      case "In Progress":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "Closed Win":
        return "bg-green-50 text-green-700 border-green-200";
      case "Closed Lost":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-750 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Top action section */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        
        {/* Search & Filter bar */}
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          {/* Search Input */}
          <div className="relative flex-1 sm:w-80">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-[#00539B] text-sm shadow-sm"
            />
          </div>

          {/* Status Filter Dropdown */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00539B] shadow-sm font-medium text-gray-700"
          >
            <option value="All">All Statuses</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed Win">Closed Win (Won)</option>
            <option value="Closed Lost">Closed Lost (Lost)</option>
          </select>
        </div>

        {/* Add Manual Lead Button */}
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#ff7300] hover:bg-orange-600 text-white font-semibold text-sm px-5 py-3 rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center cursor-pointer"
        >
          <FaPlus size={14} />
          <span>Add Manual Lead</span>
        </button>

      </div>

      {/* Main Leads Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          {filteredLeads.length > 0 ? (
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-600 font-bold text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Customer Details</th>
                  <th className="px-6 py-4">Request Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredLeads.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/40 transition">
                    {/* Customer */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
                          {item.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-850 text-base">{item.name}</div>
                          <div className="flex flex-col text-xs text-gray-500 mt-0.5 space-y-0.5">
                            <span>Phone: {item.mobile}</span>
                            {item.email && item.email !== "N/A" && <span>Email: {item.email}</span>}
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    {/* Date */}
                    <td className="px-6 py-4 text-gray-600 text-xs font-semibold">
                      {item.date}
                    </td>

                    {/* Status Dropdown */}
                    <td className="px-6 py-4">
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className={`text-xs font-bold border rounded-lg px-2.5 py-1.5 focus:outline-none cursor-pointer ${getStatusClasses(item.status)}`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Closed Win">Won (Closed)</option>
                        <option value="Closed Lost">Lost (Closed)</option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {/* View Button */}
                        <button
                          onClick={() => setSelectedLead(item)}
                          title="View Address & Details"
                          className="p-2 bg-gray-50 hover:bg-[#00539B] text-gray-500 hover:text-white rounded-lg border border-gray-200 hover:border-[#00539B] transition duration-300 cursor-pointer"
                        >
                          <FaEye size={14} />
                        </button>
                        
                        {/* Delete Button */}
                        <button
                          onClick={() => handleDeleteLead(item.id)}
                          title="Delete Lead"
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
              <FaFileInvoiceDollar size={48} className="text-gray-200 mx-auto mb-4" />
              <h4 className="font-bold text-gray-800 text-lg">No Quotation Leads Found</h4>
              <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto">
                No requests match your current search terms or filter selection.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* LEAD DETAILS MODAL */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative animate-slide-up">
            
            {/* Modal Close */}
            <button
              onClick={() => setSelectedLead(null)}
              className="absolute top-4 right-4 p-2 bg-gray-150 rounded-full text-gray-600 hover:text-red-500 transition cursor-pointer"
            >
              <FaTimes size={16} />
            </button>

            {/* Modal Header */}
            <div className="bg-[#00539B] text-white p-6">
              <h3 className="text-xl font-bold">Quotation Lead Info</h3>
              <p className="text-xs text-blue-200 mt-1">ID: {selectedLead.id}</p>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              
              {/* Customer Info Card */}
              <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-2xl border border-gray-150">
                <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xl">
                  {selectedLead.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{selectedLead.name}</h4>
                  <p className="text-xs text-gray-400">Created: {selectedLead.date}</p>
                </div>
              </div>

              {/* Information Rows */}
              <div className="space-y-4">
                
                {/* Mobile */}
                <div className="flex gap-3 text-sm">
                  <FaPhoneAlt className="text-gray-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold block text-gray-500 text-xs uppercase tracking-wider">Mobile Number</span>
                    <span className="text-gray-800 font-medium">{selectedLead.mobile}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3 text-sm">
                  <FaEnvelope className="text-gray-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold block text-gray-500 text-xs uppercase tracking-wider">Email Address</span>
                    <span className="text-gray-800 font-medium">{selectedLead.email}</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-3 text-sm">
                  <FaMapMarkerAlt className="text-gray-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold block text-gray-500 text-xs uppercase tracking-wider">Installation Address</span>
                    <p className="text-gray-800 font-medium leading-relaxed whitespace-pre-line">{selectedLead.address}</p>
                  </div>
                </div>

                {/* Status Update */}
                <div className="flex gap-3 text-sm border-t border-gray-100 pt-4 items-center">
                  <FaInfoCircle className="text-gray-400 shrink-0" />
                  <div className="flex-1 flex justify-between items-center">
                    <span className="font-semibold text-gray-500 text-xs uppercase tracking-wider">Lead Status</span>
                    <select
                      value={selectedLead.status}
                      onChange={(e) => handleStatusChange(selectedLead.id, e.target.value)}
                      className={`text-xs font-bold border rounded-lg px-2.5 py-1.5 focus:outline-none cursor-pointer ${getStatusClasses(selectedLead.status)}`}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Closed Win">Won (Closed)</option>
                      <option value="Closed Lost">Lost (Closed)</option>
                    </select>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

      {/* ADD MANUAL LEAD MODAL */}
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
            <div className="bg-[#ff7300] text-white p-6">
              <h3 className="text-xl font-bold">Add Manual Lead</h3>
              <p className="text-xs text-orange-100 mt-1">Manually log a custom quotation request</p>
            </div>

            {/* Form */}
            <form onSubmit={handleAddLeadSubmit} className="p-6 space-y-4">
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Enter Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:border-[#ff7300] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1.5">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="tel"
                    required
                    value={newMobile}
                    onChange={(e) => setNewMobile(e.target.value)}
                    placeholder="Enter Mobile Phone"
                    className="w-full pl-10 pr-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:border-[#ff7300] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="Enter Email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:border-[#ff7300] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1.5">
                  Installation Address
                </label>
                <textarea
                  rows="3"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  placeholder="Enter complete address details..."
                  className="w-full px-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:border-[#ff7300] text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1.5">
                  Lead Status
                </label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:border-[#ff7300] text-sm font-medium text-gray-700"
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Closed Win">Won (Closed)</option>
                  <option value="Closed Lost">Lost (Closed)</option>
                </select>
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
                  className="w-1/2 bg-[#ff7300] hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition duration-300 cursor-pointer text-sm"
                >
                  Save Lead
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Leads;
