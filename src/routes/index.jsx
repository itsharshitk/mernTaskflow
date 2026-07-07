import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import ProtectedRoute from "../components/auth/ProtectedRoute";

import LoginPage from "../pages/auth/Loginpage";
import RegisterPage from "../pages/auth/registerPage";
import DashboardPage from "../pages/dashboard/DashboardPage";

const router = createBrowserRouter([
    {path: "/", element: <LoginPage />},

    {element: <AuthLayout />, children: [    
        {path: "/login", element: <LoginPage />},
        
        {path: "/register", element: <RegisterPage />},
    ]},
    {element: (
        <ProtectedRoute>
            <DashboardLayout />
        </ProtectedRoute>
    ), children: [  
        {path: "/dashboard", element: <DashboardPage />},
    ]}
]);

export default function AppRoutes(){
    return <RouterProvider router={router} />
}