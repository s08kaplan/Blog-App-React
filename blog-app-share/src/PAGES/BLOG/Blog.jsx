import React, { useEffect } from "react";
// import BlogDetails from "../BLOG-DETAILS/BlogDetails";
import { Navigate, useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import BlogCard from "../../Components/BLOG-CARD/BlogCard";
import useBlogData from "../../SERVICES/useBlogData";
import "./Blog.scss";

const Blog = () => {
  // const { user } = useSelector((state) => state.auth);
  const { idx } = useParams();
  console.log(idx);
  const { getData } = useBlogData();

  


  useEffect(() => {
    getData("blogs");
  }, []);



  return (
    <section className="blog-main">

      <h1>Blogs</h1>

      <div>
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
