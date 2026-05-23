import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function ProtectedRoute() {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    //Jika isAuthenticated false, maka redirec ke halaman login
    if(!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    //Jika isAuthenticated true, maka render children
    return <Outlet />;
}