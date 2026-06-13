import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  FaBars,
  FaUserShield,
} from "react-icons/fa";
import { Sidebar } from "../components/admin/Sidebar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Get dynamic title based on location
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/admin") return "Dashboard Overview";
    if (path === "/admin/inquary") return "Site Survey Bookings";
    if (path === "/admin/leads") return "Quotation Request Leads";
    return "Admin Panel";
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex">
      {/* Desktop Sidebar (Permanent) */}
      <aside className="hidden lg:block w-68 shrink-0 border-r border-gray-200">
        <div className="sticky top-0 h-screen">
          <Sidebar />
        </div>
      </aside>

      {/* Mobile Drawer Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          {/* Drawer container */}
          <div className="relative w-68 h-full shadow-2xl animate-slide-in">
            <Sidebar setSidebarOpen={setSidebarOpen} />
          </div>
        </div>
      )}

      {/* Page Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-gray-150 px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition focus:outline-none"
            >
              <FaBars size={20} />
            </button>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
              {getPageTitle()}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* User status Indicator */}
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl">
              <FaUserShield className="text-[#00539B]" size={20} />
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-gray-850">Admin Staff</p>
                <p className="text-[10px] text-gray-500 font-medium">Logged In</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Canvas Screen */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
