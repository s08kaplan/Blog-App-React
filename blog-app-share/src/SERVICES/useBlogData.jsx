import React from "react";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getAllData } from "../FEATURES/BlogSlice";

const useBlogData = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getAllBlogData = async () => {
    dispatch(fetchStart());

    try {
      const [users, categories, blogs, comments] = await Promise.all([
        axiosWithToken("users/"),
        axiosWithToken("categories/"),
        axiosWithToken("blogs/"),
        axiosWithToken("comments/"),
      ]);

      dispatch(
        getAllData([
          users?.data?.data,
          categories?.data?.data,
          blogs?.data?.data,
          comments?.data?.data,
        ])
      );
    } catch (error) {
        dispatch(fetchFail())
        console.log(error);
    }
  };

  return { getAllBlogData };
};

export default useBlogData;
