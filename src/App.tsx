import React from "react";
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
import UsersPage from "./pages/UsersPage";
import SuperAdmin from "./pages/SuperAdmin";
import Admin from "./pages/Admin";
import Task from "./pages/Task";
import DefaultLayout from "./layouts/defaultLayout";
import { useAuthStore } from "./store/authStore";
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
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Router>
      {/* public routes */}
      <DefaultLayout>
        <Routes>
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
          
          <Route
            path="/login"
            element={!isAuthenticated ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={!isAuthenticated ? <Navigate to="/" /> : <Signup />}
          />
          <Route path="/signup-success" element={<SignupSuccess />} />
          <Route path="/super-admin" element={<SuperAdmin />} />
          <Route
            path="/tasks"
            element={isAuthenticated ? <Task /> : <Navigate to="/login" />}
          />
          {/* <Route path='*' element={<Navigate to='/' />} /> */}

          <Route
            path="/profile"
            element={
              <ProfilePage /> //isAuthenticated ?  : <Navigate to="/login" />
            }
          />
          <Route
            path="/tasks-screen"
            element={
              <TasksPage /> //isAuthenticated ?  : <Navigate to="/login" />
            }
          />
          <Route
            path="/tasks-details"
            element={
              <TasksDetailsPage /> //isAuthenticated ?  : <Navigate to="/login" />
            }
          />
          <Route
            path="/account-settings"
            element={
              <ProfileSettingsPage /> //isAuthenticated ?  : <Navigate to="/login" />
            }
          />
          <Route
            path="/leaderboard"
            element={
              <LeaderboardLayout>
                <Leaderboard />
              </LeaderboardLayout>
            }
          />
        </Routes>

        {/* protected routes */}
        <Routes>
          <Route path="/super-admin" element={<SuperAdmin />} />
          <Route
            path="/tasks"
            element={!isAuthenticated ? <Task /> : <Navigate to="/login" />}
          />
          <Route
            path="/settings/profile"
            element={
              isAuthenticated ? (
                <EditProfile />
              ) : (
                <Navigate to="/settings/profile" />
              )
            }
          />
          <Route
            path="/settings/linked-accounts"
            element={
              isAuthenticated ? (
                <LinkedAccounts />
              ) : (
                <Navigate to="/settings/linked-accounts" />
              )
            }
          />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>

        {/* protected routes */}
        <Routes>
          <Route
            path="/user"
            element={
              !isAuthenticated ? <UsersPage /> : <Navigate to="/login" />
            }
          />
        </Routes>

        {/* admin routes */}
        <Routes>
          <Route
            path="/admin"
            element={!isAuthenticated ? <Admin /> : <Navigate to="/login" />}
          />
        </Routes>
      </DefaultLayout>
    </Router>
  );
};

export default App;
