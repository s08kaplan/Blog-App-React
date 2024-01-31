import { useSelector } from "react-redux";
import { GrLike } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import "./BlogCard.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  const { blogs } = useSelector((state) => state.blog);
  const { user } = useSelector(state=> state.auth)
  const [ like, setLike ] = useState(false)
  console.log(blogs);

  return (
    <section className="blog-card-main">
      <div className="container">
        {blogs.map((blog) => (
          <div key={blog._id} className="cards">
            <img className="blog-card-img" src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p className="blog-content">{blog.content}</p>
            <div className="icons">
              <div onClick={()=> setLike(!like)}>{like ? <FcLike /> : <GrLike />}</div>
              <div>
                <FaRegCommentDots />
              </div>
              <div>
                <LuEye />
              </div>
             
              <Link to={ user ? `/blog-details/${blog._id}` : "/blog"}>
              <button>Read More</button>
              </Link>
              
          
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCard;
