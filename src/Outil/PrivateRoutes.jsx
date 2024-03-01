import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
 
const [isAuthenticated, setIsAuthenticated] = useState(false);

 // Your authentication logic goes here...
 
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;