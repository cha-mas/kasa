import { BrowserRouter, Route, Routes } from "react-router";
import { Layout, Home, About, Details, Error } from './pages';
import { ErrorBoundary } from '../../components/details/ErrorBoundary';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/details/:id" element={
                        <ErrorBoundary>
                            <Details />
                        </ErrorBoundary>
                    } />
                    <Route path="about" element={<About />} />
                    {/* 404 - Catch all */}
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}