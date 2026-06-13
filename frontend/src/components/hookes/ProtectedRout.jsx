import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRout = () => {
  const isLoggedIn = sessionStorage.getItem("ashnora_admin_logged_in") === "true";
  
  return isLoggedIn ? <Outlet /> : <Navigate to="/admin/login" replace />;
};
