import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import HeroPage from "@/Pages/HeroPage";
import LoginPage from "@/Pages/LoginPage";

// The following pages will be protected routed
// import DashboardPage from "@/Pages/DashboardPage";
// import UploadPage from "@/Pages/UploadPage";
// import JobPostingsPage from "@/Pages/JobPostings";
// import SettingsPage from "@/Pages/SettingsPage";

// Importing components
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navbar */}
        <Navbar />
        {/* Main Content Area */}
        <div className="flex-1">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HeroPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Protected routes: not currently implemented as protected for development */}
            {/* <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/job-postings" element={<JobPostingsPage />} />
            <Route path="/settings" element={<SettingsPage />} /> */}

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
