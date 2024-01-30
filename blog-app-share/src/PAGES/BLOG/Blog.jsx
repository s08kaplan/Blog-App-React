import React from 'react'
import BlogDetails from '../BLOG-DETAILS/BlogDetails'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BlogCard from '../../Components/BLOG-CARD/BlogCard'

const Blog = () => {
    const {user} = useSelector( state => state.auth)
    const { _id } = useSelector(state=> state.blog)
   
  return (
    <section>
        <h1>blog</h1>
       
       <div onClick={()=> user && _id ? <BlogDetails/> :  <Navigate to="/login"/>} className="blog-card">

        <BlogCard/> 
       </div>
      
    </section>
  )
}

export default Blog