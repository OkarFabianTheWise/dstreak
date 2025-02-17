"use client";

import type React from "react";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import DefaultLayout from "./layouts/defaultLayout";
import { initializeAuth } from "./utils/api/auth";
import { useRoutes } from "./routes";

// Helper component to determine which layout to use
const AppContent = () => {
  const location = useLocation();
  const routes = useRoutes();

  // Check if current path is an admin route
  const isAdminRoute =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/super-admin");

  if (isAdminRoute) {
    return (
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    );
  }

  return (
    <DefaultLayout>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </DefaultLayout>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    initializeAuth();
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
