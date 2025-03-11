"use client";

import type React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Providers from "./contexts/Providers";
import DefaultLayout from "./layouts/defaultLayout";
import { useRoutes } from "./routes";
import { UserProvider } from "@/contexts/UserContext";

const AppContent = () => {
  const location = useLocation();
  const routes = useRoutes();

  const isAdminRoute =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/super-admin");

  return (
    <UserProvider>
      {isAdminRoute ? (
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      ) : (
        <DefaultLayout>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </DefaultLayout>
      )}
    </UserProvider>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Providers>
        <AppContent />
      </Providers>
    </Router>
  );
};

export default App;
