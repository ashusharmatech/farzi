import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function AuthRequired() {
	// Check the authenticated status of the user
	// If they're NOT logged in
	// Send them to the login page
	// If they ARE logged in
	// Render the Outlet

	let auth = { token: false };
	return auth.token ? <Outlet /> : <Navigate to="/login" />;
	return <Outlet />;
}
