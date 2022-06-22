import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
    const isAuthenticated = localStorage.getItem('@MC_AC'); 

    return isAuthenticated ? <Outlet /> :  <Navigate to="/auth/signin" replace={true} />
}

export const useProtectedRoutes = () => ({ ProtectedRoutes });