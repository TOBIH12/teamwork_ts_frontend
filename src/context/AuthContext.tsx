import { createContext, useContext, useEffect, useState } from 'react';
import * as AuthTypes from '../types/authFlow.types';

export const UserContext = createContext<AuthTypes.AuthContextType | undefined>(undefined);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<AuthTypes.User | null>(null);
  const [error, setError] = useState<string>('');

  const handleUserAuthStorage = () => {
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error: unknown) {
        setError(
          'Failed to parse stored user data: ' +
            (error instanceof Error ? error.message : String(error))
        );
        localStorage.removeItem(storedUser);
      }
    }
  };

  useEffect(() => {
    handleUserAuthStorage();
  }, []);

  const login = (userData: AuthTypes.User) => {
    setUser(userData);
    localStorage.setItem('auth_user', JSON.stringify(userData));
    localStorage.setItem('auth_token', userData.token);
    setError('');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
    localStorage.removeItem('auth_token');
    setError('');
  };

  return (
    <UserContext.Provider value={{ user, login, logout, error }}>{children}</UserContext.Provider>
  );
};

export const UserAuth = (): AuthTypes.AuthContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('UserAuth must be used within an AuthProvider');
  }

  return context;
};
