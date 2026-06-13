import { useState } from "react";
import { FaLock, FaKey, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { api } from "../../utils/api";

const Setting = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChangePasswordSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    // Validations
    if (newPassword.length < 4) {
      setMessage({
        type: "error",
        text: "New password must be at least 4 characters long.",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage({
        type: "error",
        text: "The new password and confirmation password do not match.",
      });
      return;
    }

    try {
      await api.updatePassword(newPassword);
      
      // Reset inputs
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      setMessage({
        type: "success",
        text: "Password updated successfully!",
      });
    } catch (err) {
      setMessage({
        type: "error",
        text: err.message || "Failed to update password.",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-md overflow-hidden">
        
        {/* Card Header */}
        <div className="bg-[#00539B] px-8 py-6 text-white">
          <h3 className="text-xl font-bold">Account Security Settings</h3>
          <p className="text-xs text-blue-150 mt-1">Manage and update your administrator access credentials.</p>
        </div>

        {/* Card Body */}
        <form onSubmit={handleChangePasswordSubmit} className="p-8 space-y-6">
          
          {/* Notifications */}
          {message.text && (
            <div 
              className={`p-4 rounded-xl border flex items-center gap-3 text-sm animate-pulse ${
                message.type === "success" 
                  ? "bg-green-50 border-green-200 text-green-700" 
                  : "bg-red-50 border-red-200 text-red-700"
              }`}
            >
              {message.type === "success" ? (
                <FaCheckCircle size={20} className="shrink-0" />
              ) : (
                <FaExclamationCircle size={20} className="shrink-0" />
              )}
              <span className="font-medium">{message.text}</span>
            </div>
          )}

          {/* Current Password */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Current Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                className="w-full pl-11 pr-4 py-3.5 border border-gray-255 rounded-xl focus:outline-none focus:border-[#00539B] text-sm font-medium"
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* New Password */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              New Password
            </label>
            <div className="relative">
              <FaKey className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Minimum 4 characters"
                className="w-full pl-11 pr-4 py-3.5 border border-gray-255 rounded-xl focus:outline-none focus:border-[#00539B] text-sm font-medium"
              />
            </div>
          </div>

          {/* Confirm New Password */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <FaKey className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                className="w-full pl-11 pr-4 py-3.5 border border-gray-255 rounded-xl focus:outline-none focus:border-[#00539B] text-sm font-medium"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="bg-[#ff7300] hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl transition duration-300 shadow-md hover:shadow-lg cursor-pointer text-sm"
            >
              Update Password
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default Setting;
