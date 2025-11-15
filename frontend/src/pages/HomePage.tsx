import { Hero } from "@/components/hero"

export default function HomePage() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6">
            <div className="w-full max-w-sm">
                <Hero />
            </div>
        </div>
    )
}