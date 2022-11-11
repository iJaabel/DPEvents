import { useState, createContext } from "react";

export const AuthContext = createContext({
  userId: "",
  setUserId: (newUserID) => {
    
  },
});

export default AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
