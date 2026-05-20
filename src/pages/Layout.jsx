import { Outlet } from "react-router";
import { Header } from "../components/layout/Header";

export function Layout() {
    return <div>
        <Header />
        <main><Outlet /></main>
    </div>
}