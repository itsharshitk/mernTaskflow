import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import LoginPage from "../pages/auth/Loginpage";
import RegisterPage from "../pages/auth/registerPage";
import DashboardPage from "../pages/dashboard/DashboardPage";

const router = createBrowserRouter([
    {path: "/", element: <LoginPage />},

    {element: <AuthLayout />, children: [    
        {path: "/login", element: <LoginPage />},
        
        {path: "/register", element: <RegisterPage />},
    ]},
    {element: <DashboardLayout />, children: [  
        {path: "/dashboard", element: <DashboardPage />},
    ]}
]);

export default function AppRoutes(){
    return <RouterProvider router={router} />
}