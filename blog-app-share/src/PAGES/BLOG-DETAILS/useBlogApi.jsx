import React, { useState } from 'react'
import useAxios from '../../SERVICES/useAxios';
import { useParams } from "react-router-dom";

const useBlogApi = () => {
const { axiosWithToken } = useAxios()
const [commentList, setCommentList] = useState([]);
const { idx } = useParams()
    const addRemoveLike = async (url = "blogs") => {
        try {
          await axiosWithToken.post(`${url}/${idx}/postLike`);
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
            return data.data;
          });
          const comments = await Promise.all(commentsPromises);
          setCommentList(comments);
        } catch (error) {
          console.log(error);
        }
      };
  return {commentList, setCommentList, addRemoveLike, getCommentList, getSingleComment }
}

export default useBlogApi