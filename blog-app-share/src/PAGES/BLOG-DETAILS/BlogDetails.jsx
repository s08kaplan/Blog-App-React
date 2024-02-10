import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useAxios from "../../SERVICES/useAxios";
import "./BlogDetails.scss";

const BlogDetails = () => {
  const { idx } = useParams();
  const { blogs, comments } = useSelector((state) => state.blog);
  const { axiosWithToken } = useAxios();
  const [showComment, setShowComment] = useState(false);
  const [textarea, setTextarea] = useState("");
  const [commentList, setCommentList] = useState([]);
  console.log(blogs);

  const addRemoveLike = async (url = "blogs") => {
    try {
      const { data } = await axiosWithToken.post(`${url}/${idx}/postLike`);
    } catch (error) {
      console.log(error);
    }
  };

  const getCommentList = async () => {
    try {
      const { data } = await axiosWithToken("comments/");

      console.log(data);

      setCommentList(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getSingleComment = async (endpoints) => {
    try {
      const commentsPromises = endpoints.map(async (endpoint) => {
        const { data } = await axiosWithToken(`comments/${endpoint}/`);
        console.log(data.data);
        return data.data;
      });
      const comments = await Promise.all(commentsPromises);
      setCommentList(comments);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(commentList);

  useEffect(() => {
    addRemoveLike();
    getCommentList();
    getSingleComment(selectedBlog.comments);
  }, []);

  const handleTextArea = (e) => {
    setTextarea(e.target.value);
    console.log(textarea);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    try {
      axiosWithToken.post(`comments/`, { blogId: idx, comment: textarea });
      console.log("added");
      setTextarea("");
      setShowComment(true);
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
                <textarea
                  name="addComment"
                  id="addComment"
                  cols="30"
                  rows="10"
                  placeholder="Add Your Thoughts"
                  style={{ resize: "none" }}
                  value={textarea}
                  onChange={handleTextArea}
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
