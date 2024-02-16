import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from '../App';
import HomePage from '../pages/homePage/HomePage';
import Map from '../pages/map/Map';
import Error404 from '../pages/error404/Error404';

interface SessionContextType {
  isAuthenticated: boolean;
  cardCollapsed?: boolean;
  isCollapsed: boolean;
  login: () => void;
  logout: () => void;
  handleCardCollapsed: (e: any) => void
  collapsedSideBar: (e: any) => void;
}

export const SessionContext = React.createContext<SessionContextType>({
  isAuthenticated: false,
  cardCollapsed: false,
  isCollapsed: false,
  login: () => {},
  logout: () => {},
  handleCardCollapsed: () => {},
  collapsedSideBar: () => {}
});

const RouterRoutes: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {

    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });

  const [ cardCollapsed, setCardCollapsed ] = useState<boolean>(false)

  const handleCardCollapsed = (event: any) => {
    if (event !== null) {
        setCardCollapsed(false);
    } else {
        setCardCollapsed(true);
    }

  }

  const [ isCollapsed, setIsCollapsed ] = useState(false);

  function collapsedSideBar (e: any) {
    e.preventDefault();
    if (isCollapsed === true) {
      setIsCollapsed(false);
    } else {
      setIsCollapsed(true);
    }

};

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <SessionContext.Provider value={{ isAuthenticated, cardCollapsed, isCollapsed ,login, logout, handleCardCollapsed, collapsedSideBar }}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<App />} />
          <Route path="/home" element={<PrivateRoute component={HomePage} />} />
          <Route path="/map/:id" element={<PrivateRoute component={Map} />} />
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
