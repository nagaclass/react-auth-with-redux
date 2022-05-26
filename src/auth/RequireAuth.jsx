import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  const { isLoggedIn, roles } = useSelector(({ userAuth }) => userAuth);
  const location = useLocation();

  return roles?.find(role => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : isLoggedIn ? (
    <Navigate to={"/unauthorized"} state={{ from: location }} replace />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );

  // return isLoggedIn ? (
  //   roles.find(role => allowedRoles.includes(role)) ? (
  //     <Navigate to={"/login"} state={{ from: location }} replace />
  //   ) : (
  //     <Outlet />
  //   )
  // ) : (
  //   <Navigate to={"/unauthorized"} state={{ from: location }} replace />
  // );
};

export default RequireAuth;
