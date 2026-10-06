import { createContext, useContext, useEffect, useState } from "react";
import * as AuthTypes from '../types/authFlow.types'


export const UserContext = createContext<AuthTypes.AuthContextType | undefined>(undefined);


export const UserProvider = ({children}: any) => {
    const [user, setUser] = useState<AuthTypes.User | null>(null)
    const [isLoading, setisloading] = useState<boolean>(false);

    useEffect(() =>{
      setisloading(true)
     const storedUser = localStorage.getItem('auth_user')
        if(storedUser){
         try {
           setUser(JSON.parse(storedUser))
         } catch (error: unknown) {
          console.log('Failed to parse stored user data', error);
          localStorage.removeItem(storedUser)
         }
        }
        setisloading(false);
    }, []);

    const login = (userData: AuthTypes.User) => {
      setUser(userData);
      localStorage.setItem('auth_user', JSON.stringify(userData));
    }

    const logout = () => {
      setUser(null);
      localStorage.removeItem('auth_user');
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('firstName');
      localStorage.removeItem('lastName');
      localStorage.removeItem('jobRole');
    }

  return  <UserContext.Provider value={{user, login, logout, isLoading}}>{children}</UserContext.Provider>
}

export const userAuth = (): AuthTypes.AuthContextType => {
    const context = useContext(UserContext);
    if(!context){
      throw new Error('useAuth must be used within an AuthProvider');
    }

    return context
}
