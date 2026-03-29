import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import './scss/style.scss' // Custom styles

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

function App() {
  const { isLoaded, darkTheme, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const dispatch = useDispatch()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9-_]+$/) ? urlParams.get('theme') : null
    if (theme) {
      setColorMode(theme)
      return
    }

    if (isLoaded || darkTheme) {
      return
    }

    setColorMode('light')
  }, [isLoaded, darkTheme, setColorMode])

  const loading = (
    <div className="pt-3 text-center">
      <CSpinner color="primary" />
    </div>
  )

  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          {/* Authentication and Error Pages */}
          <Route path="/login" name="Login Page" element={<Login />} />
          <Route path="/register" name="Register Page" element={<Register />} />
          <Route path="/404" name="Page 404" element={<Page404 />} />
          <Route path="/500" name="Page 500" element={<Page500 />} />

          {/* Main Application Layout */}
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
