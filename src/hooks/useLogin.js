import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import login from "../services/auth.service";
// import useAuthStore from "../stores/auth.store";

export default function useLogin() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // const setUser = useAuthStore((state) => state.setUser);

    return useMutation({
        mutationFn: login,

        onSuccess: (response) => {

            const respData = response.data.data;

            localStorage.setItem("accessToken", respData.accessToken);

            // setUser(response.data.user);
            queryClient.setQueryData(["me"], respData);

            console.log("Login REsonse==>>", respData);
            navigate("/dashboard");
        },

        onError: (error) => {
            const message = error.response?.data?.message ?? "Something went wrong";

            console.error(message);
        }
    });
}