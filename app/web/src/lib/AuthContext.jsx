import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('app_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock login
    let role = 'user';
    if (email === 'admin@espacelingatere.org' && password === 'admin123') {
      role = 'admin';
    }
    const mockUser = { email, name: email.split('@')[0], role };
    setUser(mockUser);
    localStorage.setItem('app_user', JSON.stringify(mockUser));
    return true;
  };

  const register = (email, password) => {
    // Mock register
    const mockUser = { email, name: email.split('@')[0], role: 'user' };
    setUser(mockUser);
    localStorage.setItem('app_user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('app_user');
  };

  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);