import { Outlet } from "react-router";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export function Layout() {
    return <div>
        <Header />
        <main><Outlet /></main>
        <Footer />
    </div>
}