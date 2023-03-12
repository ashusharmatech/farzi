import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';

export default function Home() {
	const navigation = useNavigation();

	return (
		<React.Fragment>
			<div id="sidebar">
				<h1>React Router Contacts</h1>
				<nav />
			</div>
			<div id="detail">
				<Outlet />
			</div>
		</React.Fragment>
	);
}
