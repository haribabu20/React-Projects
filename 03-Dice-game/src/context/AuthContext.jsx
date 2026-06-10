import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [token, setToken] = useState(localStorage.getItem('token'));

  const isAuthenticated = !!token;
  
  return (
    <AuthContext.Provider
      value={{
        token, 
        setToken,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider