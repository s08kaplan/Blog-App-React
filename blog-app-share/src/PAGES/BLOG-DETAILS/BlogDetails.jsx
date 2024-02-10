import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useAxios from "../../SERVICES/useAxios";
import useBlogData from "../../SERVICES/useBlogData";
import Textarea from "../../Components/REUSABLE-COMPONENTS/Textarea";
import useBlogApi from "./useBlogApi";
import "./BlogDetails.scss";

const BlogDetails = () => {
  const { idx } = useParams();
  const { blogs } = useSelector((state) => state.blog);
  const { axiosWithToken } = useAxios();
  const { getData } = useBlogData()
  const [showComment, setShowComment] = useState(false);
  const [textarea, setTextarea] = useState("");
 
  const { commentList, setCommentList, addRemoveLike, getCommentList, getSingleComment } = useBlogApi()

  useEffect(() => {
    addRemoveLike();
    getCommentList();
    getData()
  }, []);

  useEffect(() => {
    getSingleComment(selectedBlog.comments);
  }, [blogs.comments])
  

  const handleTextArea = (e) => {
    setTextarea(e.target.value);
    
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    try {
      axiosWithToken.post(`comments/`, { blogId: idx, comment: textarea });
      setTextarea("");
      setShowComment(true);
      getSingleComment(selectedBlog.comments)
    } catch (error) {
      console.log(error);
    }
  };

  const selectedBlog = blogs.find((blog) => blog._id === idx);

  return (
    <div className="selected-blog-main">
      <div className="container">
        <img src={selectedBlog?.image} alt={selectedBlog?.title} />
        <h3>{selectedBlog?.title}</h3>
        <p>{selectedBlog?.content}</p>

        <div className="info">
          <FcLike />
          <span> {selectedBlog?.likes.length} </span>
          <div onClick={() => setShowComment(!showComment)}>
            <FaRegCommentDots />
            <span> {selectedBlog?.comments?.length} </span>
          </div>

          <LuEye />
          <span> {selectedBlog?.countOfVisitors} </span>
        </div>
        <div className="comments">
          {showComment && (
            <div>
              {commentList.map((item, index) => (
                <div key={index}>
                  <span>{item?.userId?.username}</span>
                  <div>{item?.comment}</div>
                </div>
              ))}
              <div className="add-comment">

                <Textarea
                value={textarea}
                onChange={handleTextArea}
                placeholder="Add Your Thoughts"
                />
        
                <button onClick={handleAddComment}>Add Your Thoughts</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
