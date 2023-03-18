import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useNavigate } from 'react-router-dom';
import AuthRequired from './components/AuthRequired';
import Layout from './components/Layout';
import Login from './routes/Login';
import { useAuth } from './hooks/useAuth';
import { AuthContext } from './context/AuthContext';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<Layout />}>
				<Route index element={<h1>Home page</h1>} />
				<Route element={<AuthRequired />}>
					<Route path="protected" element={<h1>Super secret info here</h1>} />
				</Route>
			</Route>
			<Route path="/login" element={<Login />} />
		</Route>
	)
);

function App() {
	const { user, setUser, logout } = useAuth();

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<RouterProvider router={router} />
		</AuthContext.Provider>
	);
}

export default App;
