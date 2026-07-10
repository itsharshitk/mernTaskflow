import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"

export default function DashboardLayout() {
    return(
        <>
            <div className="flex min-h-screen">
                <Sidebar />

                <div className="flex flex-1 flex-col">
                    <Header />

                    <main className="flex-1 p-6 bg-gray-100">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}