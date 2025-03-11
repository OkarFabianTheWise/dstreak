'use client'

import type React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom'
import Providers from './contexts/Providers'
import DefaultLayout from './layouts/defaultLayout'
import { useRoutes } from './routes'

// Helper component to determine which layout to use
const AppContent = () => {
  const location = useLocation()
  const routes = useRoutes()

  // Check if current path is an admin route
  const isAdminRoute =
    location.pathname.startsWith('/admin') ||
    location.pathname.startsWith('/super-admin')

  if (isAdminRoute) {
    return (
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    )
  }

  return (
    <DefaultLayout>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </DefaultLayout>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <Providers>
        <AppContent />
      </Providers>
    </Router>
  )
}

export default App
