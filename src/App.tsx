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
<<<<<<< HEAD
      <DefaultLayout>
        <Routes>
          {/* Public Routes */}
          <Route path="/auth/callback/google" element={<GoogleCallback />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/"
            element={
              <LeaderboardLayout>
                <Leaderboard />
              </LeaderboardLayout>
            }
          />
          <Route path="/tasks" element={<Task />} />
          <Route path="/tasks-details" element={<TasksDetailsPage />} />
          <Route path="/tasks-screen" element={<TasksPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-success" element={<SignupSuccess />} />
          <Route
            path="/leaderboard"
            element={
              <LeaderboardLayout>
                <Leaderboard />
              </LeaderboardLayout>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <ProfilePage />
              ) : (
                <Navigate to="/login" replace state={{ from: "/profile" }} />
              )
            }
          />

          <Route
            path="/settings/profile"
            element={
              isAuthenticated ? (
                <EditProfile />
              ) : (
                <Navigate
                  to="/login"
                  replace
                  state={{ from: "/settings/profile" }}
                />
              )
            }
          />
          <Route
            path="/settings/linked-accounts"
            element={
              isAuthenticated ? (
                <LinkedAccounts />
              ) : (
                <Navigate
                  to="/login"
                  replace
                  state={{ from: "/settings/linked-accounts" }}
                />
              )
            }
          />

          {/* Admin Routes */}
          <Route
            path="/super-admin"
            element={
              isAuthenticated ? (
                <SuperAdmin />
              ) : (
                <Navigate
                  to="/login"
                  replace
                  state={{ from: "/super-admin" }}
                />
              )
            }
          />
          <Route
            path="/admin"
            element={
              isAuthenticated ? (
                <Admin />
              ) : (
                <Navigate to="/login" replace state={{ from: "/admin" }} />
              )
            }
          />

          {/* Account Settings */}
          <Route
            path="/account-settings"
            element={
              isAuthenticated ? (
                <ProfileSettingsPage />
              ) : (
                <Navigate
                  to="/login"
                  replace
                  state={{ from: "/account-settings" }}
                />
              )
            }
          />
        </Routes>
      </DefaultLayout>
=======
      <AppContent />
>>>>>>> 90500595df8c3ddd02d0c8d842ba236d4bc85a09
    </Router>
  );
};

export default App;
