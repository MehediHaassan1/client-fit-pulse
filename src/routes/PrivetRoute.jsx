import { Navigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import useAuth from "../hooks/useAuth";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <Loading></Loading>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivetRoute;
