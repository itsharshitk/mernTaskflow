import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/auth.service";

const useMe = () => {
    return useQuery({
        queryKey: ["me"],
        queryFn: getMe,
        retry: false
    });
}

export default useMe;