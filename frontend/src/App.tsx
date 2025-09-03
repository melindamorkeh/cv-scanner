import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "@/components/ui/sidebar"

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className = "flex-1 p-6">
          <Routes>
            <Route path="/" element={<div>Dashboard Page</div>} />
            <Route path="/upload" element={<div>Upload CV Page</div>} />
            <Route path="/job-postings" element={<div>Job Postings Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
