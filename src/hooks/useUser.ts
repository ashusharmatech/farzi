import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocalStorage } from './useLocalStorage';

export interface User {
  id: string;
  name: string;
  email: string;
  authToken?: string;
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { getItem, setItem } = useLocalStorage();

  const addUser = (user: User) => {
    setUser(user);
    console.log("useUser addUser "+JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    setItem('user', '');
    console.log("useUser removeUser "+JSON.stringify(user));
  };

  const getUser = () => {
    console.log("useUser getUser "+JSON.stringify(getItem('user')));
    return getItem('user');

  };

  return { user, setUser, addUser, removeUser, getUser };
};