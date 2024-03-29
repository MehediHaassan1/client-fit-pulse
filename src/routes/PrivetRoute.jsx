import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth();
    let location = useLocation();
    if (loading) {
        return <Loading></Loading>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;
