import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from '../pages/Layout';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Error } from '../pages/Error';

export function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                {/* 404 */}
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    </BrowserRouter>
}