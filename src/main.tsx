import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import DashboardPage from './pages/dashboard-page.component'
import ProfilePage from './pages/profile-page.component'
import TasksPage from './pages/tasks-page.component'
import LoginPage from './pages/login-page.component'
import RegisterPage from './pages/register-page.component'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={ROUTES.OVERVIEW} element={<App />}>
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
          <Route path={ROUTES.TASKS} element={<TasksPage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
