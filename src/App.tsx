import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignupSuccess from "./pages/SignupSuccess";
// import UsersPage from "./pages/UsersPage";
import SuperAdmin from "./pages/SuperAdmin";
import Admin from "./pages/Admin";
import Task from "./pages/Task";
import DefaultLayout from "./layouts/defaultLayout";
import { initializeAuth, useAuthStore } from "./utils/api/auth";
import EditProfile from "./pages/accounts-settings/EditProfile";
import LinkedAccounts from "./pages/accounts-settings/LinkedAccounts";
import LeaderboardLayout from "./pages/leaderboard/layouts";
import { Leaderboard } from "./pages/leaderboard/Leaderboard";
import ProfilePage from "./pages/ProfilePage";
import TasksPage from "./pages/TasksPage";
import TasksDetailsPage from "./pages/TaskDetailsPage";
import ProfileSettingsPage from "./pages/ProfileSettingsPage";
import GoogleCallback from "./components/GoogleCallback";

const App: React.FC = () => {
  useEffect(() => {
    initializeAuth();
  }, []);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Router>
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
    </Router>
  );
};

export default App;
