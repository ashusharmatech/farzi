import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import AuthRequired from './components/AuthRequired';
import Layout from './components/Layout';
import { Protected } from './components/Protected';
import ErrorPage from './error-page';
import Home from './routes/Home';
import Member from './routes/Member';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<Layout />}>
				<Route index element={<h1>Home page</h1>} />
				<Route element={<AuthRequired />}>
					<Route path="protected" element={<h1>Super secret info here</h1>} />
				</Route>
			</Route>
			<Route path="/login" element={<h1>login</h1>} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
