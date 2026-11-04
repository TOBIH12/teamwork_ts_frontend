import { createContext, useContext, useEffect, useState } from 'react';
import * as AuthTypes from '../types/authFlow.types';

export const UserContext = createContext<AuthTypes.AuthContextType | undefined>(undefined);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<AuthTypes.User | null>(null);
  const [error, setError] = useState<string>('');

  const ONE_DAY_MS = 24 * 60 * 60 * 1000;

  const handleUserAuthStorage = () => {
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      const parsedUser: AuthTypes.User = JSON.parse(storedUser);
      try {
       if (parsedUser.expiresAt > Date.now()) {
          setUser(parsedUser);
        } else {
          localStorage.removeItem('auth_user');
          localStorage.removeItem('auth_token');
        }
      } catch (error: unknown) {
        setError(
          'Failed to parse stored user data: ' +
            (error instanceof Error ? error.message : String(error))
        );
        localStorage.removeItem('auth_user');
        localStorage.removeItem('auth_token');
      }
    }
  };

  useEffect(() => {
    handleUserAuthStorage();
  }, []);

  const login = (userData: AuthTypes.User) => {
    const sessionData: AuthTypes.User = {
      ...userData,
      expiresAt: Date.now() + ONE_DAY_MS,
    }
    setUser(sessionData);
    localStorage.setItem('auth_user', JSON.stringify(sessionData));
    localStorage.setItem('auth_token', sessionData.token);
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
