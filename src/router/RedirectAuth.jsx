import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "../store/slices/authSlice";

export default function () {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const location = useLocation();
console.log({location,isLoggedIn})
  return isLoggedIn ? (
    <Navigate to={`${location.state?.from.pathname}`||'/'} replace={true} />
  ) : (
    <Outlet />
  );
}
