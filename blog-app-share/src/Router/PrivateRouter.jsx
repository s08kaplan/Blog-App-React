import React from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'
import BlogDetails from '../PAGES/BLOG-DETAILS/BlogDetails'

const PrivateRouter = () => {
    const user = true

    return user ?  <Outlet /> : <Navigate to="/" />
      
}

export default PrivateRouter