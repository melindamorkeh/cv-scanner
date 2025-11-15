import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "@/pages/LoginPage"
import SignupPage from "@/pages/SignupPage"
import DashboardPage from "@/pages/DashboardPage"


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<SignupPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </BrowserRouter>
    )
}