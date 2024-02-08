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
  const [textarea, setTextarea] = useState("")
  const [commentList, setCommentList] = useState([])
//  console.log(blogs);
 
  const addRemoveLike = async (url = "blogs") => {
    try {
      const { data } = await axiosWithToken.post(`${url}/${idx}/postLike`);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
// console.log("#############");
// console.log(comments[0].comment);
// console.log("-----------------------");
  const getCommentList = async () => {
    try {
      const { data } = await axiosWithToken("comments/")
      // console.log("**********");
      console.log(data);
      // console.log("*************");
      setCommentList(data.data)
    } catch (error) {
     console.log(error); 
    }
    
  }
  const getSingleComment = async () => {
    try {
      const { data } = await axiosWithToken("comments/65c3cc93ad429ea99171cd36/")
      console.log(data.data.comment);
      // console.log("comment got  successfully!!!");
      // setCommentList(data.data)
    } catch (error) {
     console.log(error); 
    }
    
  }

  useEffect(() => {
    addRemoveLike();
  getCommentList()
  getSingleComment()
  }, []);

  console.log(commentList);
 

  const handleTextArea = (e) => {
    setTextarea(e.target.value)
    console.log(textarea);
    
  }

  const handleAddComment = (e) => {
e.preventDefault()
try {
  axiosWithToken.post(`comments/`,{blogId:idx, comment: textarea})
  console.log("added");
  setTextarea("")
  setShowComment(true)
} catch (error) {
  console.log(error);
}


  }
console.log(comments.blogId);
  const selectedBlog = blogs.find((blog) => blog._id === idx);
  const selectedComment = comments.find((comment) => comment.blogId === idx);
  console.log(selectedComment);
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
          {showComment && (<div>
            <span>{selectedComment?.userId?.username}</span>
            {selectedComment?.comment}
            <div className="add-comment">
              <textarea name="addComment" id="addComment" cols="30" rows="10" placeholder="Add Your Thoughts" style={{resize:"none"}} onChange={handleTextArea}/>
            </div>
            <button onClick={handleAddComment}>Add Your Thoughts</button>
            </div>)}

        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
