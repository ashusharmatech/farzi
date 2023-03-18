import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useAuth } from '../hooks/useAuth';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useUser } from '../hooks/useUser';

export default function AuthRequired() {

 	const { user } = useAuth();

	useEffect(() => {
		console.log("Use Effect is "+JSON.stringify(user));
	})	
	
	return (
		<>
			<ConsoleLog>ooo {user} 000</ConsoleLog>
			{user? <Outlet /> : <Navigate to="/login" />}
		</>
		
	);
}

const ConsoleLog = ({ children }) => {
	console.log(children);
	return false;
  };
