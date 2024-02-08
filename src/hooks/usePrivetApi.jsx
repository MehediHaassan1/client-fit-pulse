import axios from "axios";

const privetApi = axios.create({
    baseURL: "http://localhost:5000",
});

const usePrivetApi = () => {
    return privetApi;
};

export default usePrivetApi;
