import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { getIsLoggedIn } from "../store/slices/authSlice";

export default function () {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const location = useLocation();
  
console.log({location,isLoggedIn})
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
}
