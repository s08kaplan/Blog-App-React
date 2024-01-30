import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
  const { idx } = useParams()
  const { blogs } = useSelector(state=> state.blog) 

   const selectedBlog = blogs.find(blog => blog._id === idx) 
  return (
    <div className='selected-blog-main'>
      <div className="container">
        <img src={selectedBlog.image} alt={selectedBlog.title} />
        <h3>{selectedBlog.title}</h3>
        <p>{selectedBlog.content}</p>
      </div>

    </div>
  )
}

export default BlogDetails