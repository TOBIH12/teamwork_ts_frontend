import { createContext, useContext, useEffect, useState } from 'react';
import * as AuthTypes from '../types/authFlow.types';

export const UserContext = createContext<AuthTypes.AuthContextType | undefined>(undefined);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<AuthTypes.User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error: unknown) {
        localStorage.removeItem(storedUser);
      }
    }
  }, []);

  const login = (userData: AuthTypes.User) => {
    setUser(userData);
    localStorage.setItem('auth_user', JSON.stringify(userData));
    localStorage.setItem('auth_token', userData.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
    localStorage.removeItem('auth_token');
  };

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};

export const UserAuth = (): AuthTypes.AuthContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('UserAuth must be used within an AuthProvider');
  }

  return context;
};
