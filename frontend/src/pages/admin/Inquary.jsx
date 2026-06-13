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
  FaCalendarAlt,
  FaCalendarCheck,
  FaInfoCircle
} from "react-icons/fa";
import { api } from "../../utils/api";

const Inquary = () => {
  const [surveys, setSurveys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  
  // Modals state
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(null); // stores survey ID if open
  
  // Appointment date state
  const [appointmentDateTime, setAppointmentDateTime] = useState("");

  // New Survey Form state
  const [newName, setNewName] = useState("");
  const [newMobile, setNewMobile] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newStatus, setNewStatus] = useState("Scheduled");

  // Load surveys
  const loadSurveys = async () => {
    try {
      const data = await api.getInquiries();
      setSurveys(data);
    } catch (err) {
      console.error("Failed to load inquiries: " + err.message);
    }
  };

  useEffect(() => {
    loadSurveys();
  }, []);

  // Update Status
  const handleStatusChange = async (id, newStatusVal) => {
    try {
      await api.updateInquiry(id, newStatusVal, undefined);
      const updated = surveys.map((item) => {
        if (item._id === id) {
          return { ...item, status: newStatusVal };
        }
        return item;
      });
      setSurveys(updated);
      
      // Update active modal details if open
      if (selectedSurvey && selectedSurvey._id === id) {
        setSelectedSurvey({ ...selectedSurvey, status: newStatusVal });
      }
    } catch (err) {
      alert("Failed to update inquiry status: " + err.message);
    }
  };

  // Schedule Survey Appointment Date
  const handleScheduleSubmit = async (e) => {
    e.preventDefault();
    if (!appointmentDateTime) {
      alert("Please select a date and time!");
      return;
    }

    const formattedDate = new Date(appointmentDateTime).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }) + ", " + new Date(appointmentDateTime).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });

    try {
      await api.updateInquiry(showScheduleModal, undefined, formattedDate);
      const updated = surveys.map((item) => {
        if (item._id === showScheduleModal) {
          return { ...item, date: formattedDate, status: "Scheduled" };
        }
        return item;
      });
      setSurveys(updated);
      
      // Update active details modal if open
      if (selectedSurvey && selectedSurvey._id === showScheduleModal) {
        setSelectedSurvey({ ...selectedSurvey, date: formattedDate, status: "Scheduled" });
      }

      setAppointmentDateTime("");
      setShowScheduleModal(null);
    } catch (err) {
      alert("Failed to reschedule: " + err.message);
    }
  };

  // Delete Survey Inquiry
  const handleDeleteSurvey = async (id) => {
    if (window.confirm("Are you sure you want to delete this site survey request?")) {
      try {
        await api.deleteInquiry(id);
        const filtered = surveys.filter((item) => item._id !== id);
        setSurveys(filtered);
        if (selectedSurvey && selectedSurvey._id === id) {
          setSelectedSurvey(null);
        }
      } catch (err) {
        alert("Failed to delete inquiry: " + err.message);
      }
    }
  };

  // Add Manual Survey
  const handleAddSurveySubmit = async (e) => {
    e.preventDefault();
    if (!newName || !newMobile) {
      alert("Name and Mobile Number are required!");
      return;
    }

    const newSurvey = {
      name: newName,
      mobile: newMobile,
      email: newEmail || "N/A",
      address: newAddress || "N/A",
      status: newStatus,
    };

    try {
      const created = await api.createInquiry(newSurvey);
      setSurveys([created, ...surveys]);

      // Reset Form & Close Modal
      setNewName("");
      setNewMobile("");
      setNewEmail("");
      setNewAddress("");
      setNewStatus("Scheduled");
      setShowAddModal(false);
    } catch (err) {
      alert("Failed to book survey: " + err.message);
    }
  };

  // Filter Logic
  const filteredSurveys = surveys.filter((item) => {
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
      case "Scheduled":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Completed":
        return "bg-green-50 text-green-700 border-green-200";
      case "Cancelled":
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
              placeholder="Search surveys..."
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
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Add Manual Survey Button */}
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#00539B] hover:bg-[#00427c] text-white font-semibold text-sm px-5 py-3 rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center cursor-pointer"
        >
          <FaPlus size={14} />
          <span>Book Manual Survey</span>
        </button>

      </div>

      {/* Main Surveys Table */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          {filteredSurveys.length > 0 ? (
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50 border-b border-gray-100 text-gray-600 font-bold text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Customer Details</th>
                  <th className="px-6 py-4">Survey Appointment</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredSurveys.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50/40 transition">
                    {/* Customer */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-[#00539B] flex items-center justify-center font-bold">
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
                    
                    {/* Appointment Date */}
                    <td className="px-6 py-4 text-gray-600 text-xs font-semibold">
                      <div className="flex items-center gap-2">
                        <span>{item.date}</span>
                        <button
                          onClick={() => setShowScheduleModal(item._id)}
                          className="text-xs text-[#00539B] hover:text-orange-500 underline font-bold cursor-pointer"
                        >
                          Reschedule
                        </button>
                      </div>
                    </td>
 
                    {/* Status Dropdown */}
                    <td className="px-6 py-4">
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item._id, e.target.value)}
                        className={`text-xs font-bold border rounded-lg px-2.5 py-1.5 focus:outline-none cursor-pointer ${getStatusClasses(item.status)}`}
                      >
                        <option value="Scheduled">Scheduled</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
 
                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {/* View Button */}
                        <button
                          onClick={() => setSelectedSurvey(item)}
                          title="View Address & Details"
                          className="p-2 bg-gray-50 hover:bg-[#00539B] text-gray-500 hover:text-white rounded-lg border border-gray-200 hover:border-[#00539B] transition duration-300 cursor-pointer"
                        >
                          <FaEye size={14} />
                        </button>
                        
                        {/* Delete Button */}
                        <button
                          onClick={() => handleDeleteSurvey(item._id)}
                          title="Delete Survey"
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
              <FaCalendarCheck size={48} className="text-gray-200 mx-auto mb-4" />
              <h4 className="font-bold text-gray-800 text-lg">No Site Surveys Found</h4>
              <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto">
                No surveys match your current search terms or filter selection.
              </p>
            </div>
          )}
        </div>
      </div>
 
      {/* SURVEY DETAILS MODAL */}
      {selectedSurvey && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative animate-slide-up">
            
            {/* Modal Close */}
            <button
              onClick={() => setSelectedSurvey(null)}
              className="absolute top-4 right-4 p-2 bg-gray-150 rounded-full text-gray-600 hover:text-red-500 transition cursor-pointer"
            >
              <FaTimes size={16} />
            </button>
 
            {/* Modal Header */}
            <div className="bg-[#00539B] text-white p-6">
              <h3 className="text-xl font-bold">Site Survey Details</h3>
              <p className="text-xs text-blue-200 mt-1">ID: {selectedSurvey._id}</p>
            </div>
 
            {/* Modal Body */}
            <div className="p-6 space-y-5">
              
              {/* Customer Info Card */}
              <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-2xl border border-gray-150">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-[#00539B] flex items-center justify-center font-bold text-xl">
                  {selectedSurvey.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{selectedSurvey.name}</h4>
                  <p className="text-xs text-gray-400">Created: {selectedSurvey.date}</p>
                </div>
              </div>
 
              {/* Information Rows */}
              <div className="space-y-4">
                
                {/* Mobile */}
                <div className="flex gap-3 text-sm">
                  <FaPhoneAlt className="text-gray-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold block text-gray-500 text-xs uppercase tracking-wider">Mobile Number</span>
                    <span className="text-gray-800 font-medium">{selectedSurvey.mobile}</span>
                  </div>
                </div>
 
                {/* Email */}
                <div className="flex gap-3 text-sm">
                  <FaEnvelope className="text-gray-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold block text-gray-500 text-xs uppercase tracking-wider">Email Address</span>
                    <span className="text-gray-800 font-medium">{selectedSurvey.email}</span>
                  </div>
                </div>
 
                {/* Address */}
                <div className="flex gap-3 text-sm">
                  <FaMapMarkerAlt className="text-gray-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold block text-gray-500 text-xs uppercase tracking-wider">Installation Address</span>
                    <p className="text-gray-800 font-medium leading-relaxed whitespace-pre-line">{selectedSurvey.address}</p>
                  </div>
                </div>
 
                {/* Appointment Schedule */}
                <div className="flex gap-3 text-sm items-center">
                  <FaCalendarAlt className="text-gray-400 shrink-0" />
                  <div className="flex-1 flex justify-between items-center">
                    <div>
                      <span className="font-semibold block text-gray-500 text-xs uppercase tracking-wider">Survey Schedule</span>
                      <span className="text-gray-800 font-medium">{selectedSurvey.date}</span>
                    </div>
                    <button
                      onClick={() => setShowScheduleModal(selectedSurvey._id)}
                      className="text-xs text-[#00539B] hover:text-orange-500 underline font-bold cursor-pointer"
                    >
                      Reschedule
                    </button>
                  </div>
                </div>
 
                {/* Status Update */}
                <div className="flex gap-3 text-sm border-t border-gray-100 pt-4 items-center">
                  <FaInfoCircle className="text-gray-400 shrink-0" />
                  <div className="flex-1 flex justify-between items-center">
                    <span className="font-semibold text-gray-500 text-xs uppercase tracking-wider">Survey Status</span>
                    <select
                      value={selectedSurvey.status}
                      onChange={(e) => handleStatusChange(selectedSurvey._id, e.target.value)}
                      className={`text-xs font-bold border rounded-lg px-2.5 py-1.5 focus:outline-none cursor-pointer ${getStatusClasses(selectedSurvey.status)}`}
                    >
                      <option value="Scheduled">Scheduled</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
 
              </div>
 
            </div>
 
          </div>
        </div>
      )}

      {/* SCHEDULING/RESCHEDULING DATE/TIME POPUP */}
      {showScheduleModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl relative p-6 space-y-4 animate-scale-up">
            <h3 className="text-lg font-bold text-[#00539B] flex items-center gap-2">
              <FaCalendarAlt />
              <span>Schedule Survey Appointment</span>
            </h3>
            
            <form onSubmit={handleScheduleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-xs font-semibold mb-1 uppercase tracking-wider">
                  Choose Date & Time
                </label>
                <input
                  type="datetime-local"
                  required
                  value={appointmentDateTime}
                  onChange={(e) => setAppointmentDateTime(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:border-[#00539B] text-sm text-gray-700 font-semibold"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowScheduleModal(null)}
                  className="w-1/2 border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold py-2.5 rounded-xl transition cursor-pointer text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-[#00539B] hover:bg-[#00427c] text-white font-semibold py-2.5 rounded-xl transition cursor-pointer text-sm"
                >
                  Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD MANUAL SURVEY MODAL */}
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
              <h3 className="text-xl font-bold">Book Manual Survey</h3>
              <p className="text-xs text-blue-100 mt-1">Book a new site survey for a customer</p>
            </div>

            {/* Form */}
            <form onSubmit={handleAddSurveySubmit} className="p-6 space-y-4">
              
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:border-[#00539B] text-sm"
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:border-[#00539B] text-sm"
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:border-[#00539B] text-sm"
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
                  className="w-full px-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:border-[#00539B] text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1.5">
                  Survey Status
                </label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-250 rounded-xl focus:outline-none focus:border-[#00539B] text-sm font-medium text-gray-700"
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
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
                  className="w-1/2 bg-[#00539B] hover:bg-[#00427c] text-white font-semibold py-3 rounded-xl transition duration-300 cursor-pointer text-sm"
                >
                  Save Survey
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Inquary;
