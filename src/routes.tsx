import { Route, Routes } from "react-router-dom";

import { Signin } from  "./pages/Signin"
import { Dashboard } from  "./pages/Dashboard"
import { useProtectedRoutes } from "./hooks/useProtectedRoutes";

export function Router() {
    const { ProtectedRoutes } = useProtectedRoutes();

    return (
        <Routes>
            <Route path="/auth/signin" element={<Signin />} />

            <Route element={<ProtectedRoutes />}>
                <Route path="/" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}