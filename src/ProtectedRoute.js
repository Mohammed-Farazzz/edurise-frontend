import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ allowedRoles, element }) {
  const { token, userRole } = useAuth();
  

  if (!token || !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" />;
  }

  return element;
}
