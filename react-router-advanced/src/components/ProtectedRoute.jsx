import { Navigate } from "react-router-dom";
import { useAuth } from "../useAuth";

function ProtectedRoute({ children }) {
  if (!useAuth.isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
