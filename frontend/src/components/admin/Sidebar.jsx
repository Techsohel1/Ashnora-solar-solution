import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  FaChartLine,
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaArrowLeft,
  FaTimes,
  FaCog,
  FaRss,
  FaSignOutAlt,
} from "react-icons/fa";

export const Sidebar = ({ setSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("ashnora_admin_logged_in");
    navigate("/admin/login", { replace: true });
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: FaChartLine,
      exact: true,
    },
    {
      name: "inquary",
      path: "/admin/inquary",
      icon: FaCalendarCheck,
      exact: false,
    },
    {
      name: "Leads",
      path: "/admin/leads",
      icon: FaFileInvoiceDollar,
      exact: false,
    },
    {
      name: "Blogs",
      path: "/admin/blogs",
      icon: FaRss,
      exact: false,
    },
    {
      name: "setting",
      path: "/admin/setting",
      icon: FaCog,
      exact: false,
    },

  ];

  return (
    <div className="flex flex-col h-full bg-[#00539B] text-white">
      {/* Brand Header */}
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1">
            <img src="/logo.png" alt="Logo" className="object-contain max-h-full" />
          </div>
          <div>
            <h1 className="font-bold text-base leading-tight tracking-wider uppercase">Ashnora</h1>
            <p className="text-[10px] text-orange-400 font-semibold tracking-wider">SOLAR SOLUTION</p>
          </div>
        </Link>
        <button
          onClick={() => setSidebarOpen && setSidebarOpen(false)}
          className="lg:hidden p-1 text-white hover:text-orange-400 transition"
        >
          <FaTimes size={20} />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = item.exact 
            ? location.pathname === item.path 
            : location.pathname.startsWith(item.path) && item.path !== "/admin";
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen && setSidebarOpen(false)}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium tracking-wide transition-all duration-300 ${
                isActive
                  ? "bg-white/15 text-white border-l-4 border-orange-500 shadow-md font-semibold"
                  : "text-blue-100 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={18} className={isActive ? "text-orange-400" : ""} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Footer Actions */}
      <div className="p-4 border-t border-white/10 space-y-1">
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-3 text-sm text-blue-100 hover:bg-white/5 hover:text-white transition duration-300 rounded-xl"
        >
          <FaArrowLeft size={14} />
          <span>Exit to Website</span>
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-300 hover:bg-white/5 hover:text-red-200 transition duration-300 rounded-xl cursor-pointer text-left font-medium"
        >
          <FaSignOutAlt size={14} />
          <span>Logout Portal</span>
        </button>
      </div>
    </div>
  );
};
