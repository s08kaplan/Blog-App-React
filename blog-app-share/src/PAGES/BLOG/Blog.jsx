import React, { useEffect } from 'react'
import BlogDetails from '../BLOG-DETAILS/BlogDetails'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BlogCard from '../../Components/BLOG-CARD/BlogCard'
import useBlogData from '../../SERVICES/useBlogData'

const Blog = () => {
    const {user} = useSelector( state => state.auth)
    const { idx } = useParams()
    const { getData } = useBlogData()
    const navigate = useNavigate()

    useEffect(() => {
    getData("blogs")
    }, [])
    

  return (
    <section>
        <h1>blog</h1>
       
       {/* <div onClick={()=> user && idx ? navigate("/blog-details") :  navigate("/blog")} className="blog-card"> */}

        <BlogCard/> 
       {/* </div> */}
      
    </section>
  )
}

export default Blog