import { BrowserRouter, Route, Routes } from "react-router"

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<p>Index</p>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}