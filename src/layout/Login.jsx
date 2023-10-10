import React from 'react'
import Login from '../pages/auth/login'
import {Outlet} from 'react-router-dom'

const LoginLayout = () => {
  return (
    <div>
        {/* <h1>Login Layout</h1> */}
        {/* <Login /> */}
        <Outlet />
    </div>
  )
}

export default LoginLayout