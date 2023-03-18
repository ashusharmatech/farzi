import { useContext, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AuthContext } from '../context/AuthContext';
import { useUser } from './useUser';

export const useAuth = () => {
  const { getItem } = useLocalStorage();
  const { user, addUser, removeUser, setUser } = useUser();


  useEffect(() => {
    const user = getItem('user');
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);


  const login = (user: User) => {
    addUser(user);
    console.log("useAuth login "+JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    console.log("useAuth logout "+JSON.stringify(user));
  };

  return { user, setUser, login, logout };
};