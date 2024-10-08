import { createContext, useContext, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { supabase } from "../client";
const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('sb-dgwovnpabxkmvooluiho-auth-token'));
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const RequireAuth = () => {
  const { user } = useAuth();
  const location = useLocation();
  const token = localStorage.getItem('sb-dgwovnpabxkmvooluiho-auth-token')  
  if (!token) {
    return (
      <Navigate
        to={{ pathname: "/", state: { from: location } }}
        replace
      />
    );
  }
  return <Outlet />;
};