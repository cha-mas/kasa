import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from '../pages/Layout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Error } from '../pages/Error';
import { Details } from '../pages/Details';

export function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="details/{id}" element={<Details />} />
                <Route path="about" element={<About />} />
                {/* 404 - Catch all */}
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    </BrowserRouter>
}