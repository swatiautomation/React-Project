import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const navigate = useNavigate();

  const token = Cookies.get("auth_token");
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
