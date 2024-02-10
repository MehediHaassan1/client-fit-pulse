import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const privetApi = axios.create({
    baseURL: "http://localhost:5000",
});

const usePrivetApi = () => {
    const navigate = useNavigate();
    const { signOutFitPulseUser } = useAuth();
    privetApi.interceptors.request.use(
        function (config) {
            const token = localStorage.getItem("token");
            config.headers.authorization = `bearer ${token}`;
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    privetApi.interceptors.response.use(
        function (response) {
            return response;
        },
        async function (error) {
            const status = error.response.status;
            if (status === 401 || status === 403) {
                await signOutFitPulseUser();
                navigate("/login");
            }
            return Promise.reject(error);
        }
    );

    return privetApi;
};

export default usePrivetApi;
