import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaExclamationCircle } from "react-icons/fa";
import { api } from "../../utils/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to admin dashboard if already logged in
    const token = localStorage.getItem("ashnora_token");
    if (sessionStorage.getItem("ashnora_admin_logged_in") === "true" && token) {
      navigate("/admin", { replace: true });
    }
  }, [navigate]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await api.login(username.trim(), password);
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err.message || "Incorrect username or password. Try 'admin' & 'admin123'.");
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/images/Footer-bg.jpg')",
      }}
    >
      {/* Dark Backdrop Overlay */}
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-[32px] border border-white/20 shadow-2xl flex flex-col items-center">
        
        {/* Brand Logo */}
        <div className="w-16 h-16 rounded-2xl bg-[#00539B] flex items-center justify-center p-2 shadow-md mb-4">
          <img src="/logo.png" alt="Logo" className="object-contain max-h-full" />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 text-center tracking-tight">
          Admin Portal
        </h2>
        
        <p className="text-xs text-gray-500 font-semibold tracking-wide uppercase text-center mt-1">
          Ashnora Solar Solution
        </p>

        <form onSubmit={handleLoginSubmit} className="w-full mt-8 space-y-5">
          
          {/* Error Message */}
          {error && (
            <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl flex items-center gap-2.5 animate-pulse">
              <FaExclamationCircle className="shrink-0 text-sm" />
              <span>{error}</span>
            </div>
          )}

          {/* Username */}
          <div>
            <label className="block text-gray-700 text-xs font-bold mb-2 uppercase tracking-wide">
              Username or Email
            </label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full pl-11 pr-4 py-3.5 border border-gray-250 rounded-xl focus:outline-none focus:border-[#00539B] text-sm font-medium"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-xs font-bold mb-2 uppercase tracking-wide">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3.5 border border-gray-250 rounded-xl focus:outline-none focus:border-[#00539B] text-sm font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff7300] hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg mt-2 cursor-pointer text-sm"
          >
            Login Access
          </button>
        </form>

        <div className="mt-8 text-center">
          <a href="/" className="text-xs text-blue-600 hover:underline font-semibold">
            ← Back to Public Website
          </a>
        </div>

      </div>
    </div>
  );
};

export default Login;
