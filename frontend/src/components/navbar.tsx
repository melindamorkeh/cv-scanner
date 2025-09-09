import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
    const navigate = useNavigate()

    return (
        <nav className="flex">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex items-center h-16">
                    <div className="flex-1">
                        <div className="hidden sm:flex sm:space-x-8 justify-self-center items-center">
                            <a
                                href="/"
                                className="border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
                            >
                                Features
                            </a>
                        </div>
                        
                        <div className="flex-1 flex justify-self-end">
                            <div className="flex items-center space-x-2">
                                <ThemeToggle />
                                <div className="hidden sm:block">
                                    <Button
                                        onClick={() => navigate("/login")}
                                        className="font-medium text-base rounded-full"
                                    >
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}