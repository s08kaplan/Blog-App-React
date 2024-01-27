import React from 'react'
import BlogDetails from '../BLOG-DETAILS/BlogDetails'
import { Navigate } from 'react-router-dom'

const Blog = () => {
    const user = true
  return (
    <section>
        <h1>blog</h1>
       { user ? <BlogDetails/> : <Navigate to="/login"/>} 
    </section>
  )
}

export default Blog