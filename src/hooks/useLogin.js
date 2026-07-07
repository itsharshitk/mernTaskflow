import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import login from "../services/auth.service";
import { setAccessToken } from "../lib/token";
// import useAuthStore from "../stores/auth.store";

export default function useLogin() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // const setUser = useAuthStore((state) => state.setUser);

    return useMutation({
        mutationFn: login,

        onSuccess: (response) => {
            
            setAccessToken(response.data.data.accessToken);
            // localStorage.setItem("accessToken", response.data.data.accessToken);
            // setUser(response.data.data.user);
            queryClient.setQueryData( ["me"], {user: response.data.data.user} );

            navigate("/dashboard");
        },

        onError: (error) => {
            const message = error.response?.data?.message ?? "Something went wrong";

            console.error(message);
        }
    });
}