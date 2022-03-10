import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../../services/auth.service";

export const ProtectedRoutes = (props) => {
  const userIsLogged = getCurrentUser();
  return userIsLogged ? props.children : <Navigate to={props.redirectTo} />;
};
