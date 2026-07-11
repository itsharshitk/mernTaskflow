import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useLogin from "../../hooks/useLogin";
import loginSchema from "../../schemas/login.schema";

export default function LoginPage() {
    const { mutate, isPending } = useLogin();

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = (formData) => {
        mutate(formData)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-2xl font-bold p-5">Login Form</h1>

            <input 
            {...register("email")}
            className="email px-3 py-2 bg-blue-50 w-100"
            placeholder="Enter your email"
            />
            <span className="text-red-500">{errors.email?.message}</span>

            <input 
            type="password"
            {...register("password")}
            className="password px-3 py-2 bg-blue-50 w-100"
            placeholder="Enter your password"
            />
            <span className="text-red-500">{errors.password?.message}</span>

            <button className="px-5 py-2 bg-blue-500 text-white w-100" disabled={isPending}>{isPending?"Loggin In...":"Login"}</button>
        </form>
    )
}