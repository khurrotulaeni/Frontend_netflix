import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />

            <main className="pt-20">
                <Outlet />
            </main>

            <footer className="bg-black text-white text-center p-4">
                &copy; 2026 Netflix Indonesia
            </footer>
        </div>
    )
}