import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import login from "../services/auth.service";
import useAuthStore from "../stores/auth.store";

export default function useLogin() {
    const navigate = useNavigate();

    const setUser = useAuthStore((state) => state.setUser);

    return useMutation({
        mutationFn: login,

        onSuccess: (response) => {
            console.log(response);

            setUser(response.data.user);
            navigate("/dashboard");
        },

        onError: (error) => {
            const message = error.response?.data?.message ?? "Something went wrong";

            console.error(message);
        }
    });
}