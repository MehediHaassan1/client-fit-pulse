import usePublicApi from "./usePublicApi";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useUserData = () => {
    const publicApi = usePublicApi();
    const { user } = useAuth();
    const {
        isPending,
        error,
        data: userData,
    } = useQuery({
        queryKey: ["userData", user?.uid],
        queryFn: async () => {
            const res = await publicApi.get(`/user/${user?.uid}`);
            return res?.data;
        },
    });
    if (isPending) return "Loading...";

    return { userData };
};

export default useUserData;
