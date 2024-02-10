import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import usePrivetApi from "./usePrivetApi";

const useUserData = () => {
    const privetApi = usePrivetApi();
    const { user } = useAuth();
    const { refetch, data: userData } = useQuery({
        queryKey: ["userData", user?.uid],
        queryFn: async () => {
            const res = await privetApi.get(`/user/${user?.uid}`);
            return res?.data;
        },
    });

    return { userData, refetch };
};

export default useUserData;
