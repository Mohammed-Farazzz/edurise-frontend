import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [userRole, setUserRole] = useState(() => localStorage.getItem('role') || null);
  const navigate = useNavigate();

  // Base URL from .env (VERY IMPORTANT)
  const API_BASE = process.env.REACT_APP_API_BASE_URL;

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setUserRole(data.role);

        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);

        // Redirect based on role
        if (data.role === 'ADMIN') navigate('/admin');
        else if (data.role === 'STUDENT') navigate('/student');
        else if (data.role === 'DONOR') navigate('/donor');
        else navigate('/');
      } else {
        const err = await response.json();
        alert(err.message || 'Login failed');
      }
    } catch (error) {
      alert('Error logging in');
    }
  };

  const register = async (fullName, email, password, role) => {
    try {
      const response = await fetch(`${API_BASE}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password, role }),
      });

      if (response.ok) {
        alert('Registration successful! Please login');
        navigate('/login');
      } else {
        const err = await response.json();
        alert(err.message || 'Registration failed');
      }
    } catch (error) {
      alert('Error registering');
    }
  };

  const logout = () => {
    setToken(null);
    setUserRole(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ token, userRole, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
