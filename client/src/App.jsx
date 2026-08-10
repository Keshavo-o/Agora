import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
// import LandingPage from './LandingComponents/LandingPage'
import LoginPage from './LandingComponents/Login.jsx'
import SignUpPage from './LandingComponents/SignUpPage.jsx'
// import Home from './LandingComponents/Home.jsx'
import LoadingPage from './LandingComponents/LoadingPage.jsx'
import NotFound from './LandingComponents/NotFound.jsx'
import UserHome from './UserComponents/UserHome.jsx'
import AdminLogin from './LandingComponents/AdminLogin.jsx'
import AdminHome from './AdminComponents/AdminHome.jsx'

const LandingPage = lazy(() => import('./LandingComponents/LandingPage.jsx'))


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingPage />}>
              <LandingPage />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<LoadingPage />}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<LoadingPage />}>
              <SignUpPage />
            </Suspense>
          }
        />

        <Route
          path="/adminlogin"
          element={
            <Suspense fallback={<LoadingPage />}>
              <AdminLogin />
            </Suspense>
          }
        />


        <Route path='/user/*' element={<UserHome />}>
        </Route>

        <Route path='/admin/*' element={<AdminHome />}>
        </Route>

        <Route path='*' element={<NotFound />}>

        </Route>
      </Routes>
    </>
  )
}

export default App
