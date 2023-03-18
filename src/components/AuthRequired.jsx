import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useAuth } from '../hooks/useAuth';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useUser } from '../hooks/useUser';

export default function AuthRequired() {

 	const { addUser, removeUser, setUser, getUser } = useUser();

	const user  = getUser();
	
    console.log("User is  "+JSON.parse(user));
	return user? <Outlet /> : <Navigate to="/login" />;
}
