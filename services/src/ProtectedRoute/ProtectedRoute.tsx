import { Navigate } from "react-router-dom"
import { getAuthToken } from "../token/token";


const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({
    element,
    ...rest
  }) => {
    const token = getAuthToken();
    return token ? element : <Navigate to="/login" />;
  };

export default PrivateRoute