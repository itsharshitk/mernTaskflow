import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return(
        <>
            <header>
                Navbar
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}