import { Outlet } from "react-router";
import { Header } from "../../../components/layout/header";
import { Footer } from "../../../components/layout/footer";

export function Layout() {
    return (
        <div>
            <Header />
            <main><Outlet /></main>
            <Footer />
        </div>
    )
}