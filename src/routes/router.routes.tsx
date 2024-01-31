import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from '../App';
import HomePage from '../pages/homePage/HomePage';
import Map from '../pages/map/Map';
import Error404 from '../pages/error404/Error404';

interface SessionContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const SessionContext = React.createContext<SessionContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const RouterRoutes: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {

    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <SessionContext.Provider value={{ isAuthenticated, login, logout }}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<App />} />
          <Route path="/home" element={<PrivateRoute component={HomePage} />} />
          <Route path="/map" element={<PrivateRoute component={Map} />} />
          <Route path="*" element={<PrivateRoute component={Error404} />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
};

const PrivateRoute: React.FC<{ component: React.ComponentType }> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = React.useContext(SessionContext);

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" replace />;
};

export default RouterRoutes;
