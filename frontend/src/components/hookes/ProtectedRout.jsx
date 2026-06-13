import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRout = () => {
  const token = localStorage.getItem("ashnora_token");
  const isLoggedIn = sessionStorage.getItem("ashnora_admin_logged_in") === "true" && token;
  
  return isLoggedIn ? <Outlet /> : <Navigate to="/admin/login" replace />;
};
