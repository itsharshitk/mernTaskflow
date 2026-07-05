import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return(
        <main className="min-h-screen flex justify-center items-center">
            <div className="w-full max-w-md">
                <Outlet />
            </div>
        </main>
    )
}