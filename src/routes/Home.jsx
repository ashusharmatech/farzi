import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Home() {
	const navigation = useNavigation();
	const { user } = useAuth();

	return (
		<React.Fragment>
			<div id="sidebar">
				<h1>React Router Contacts{user}</h1>
				<nav />
			</div>
			<div id="detail">
				<Outlet />
			</div>
		</React.Fragment>
	);
}
