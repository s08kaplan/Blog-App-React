import React from "react";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import {
  newsFetchFail,
  newsFetchStart,
  newsFetchSuccess,
} from "../FEATURES/NewsSlice";

const useNewsCall = () => {
  const { axiosNews } = useAxios();
  const dispatch = useDispatch();

  const getNews = async () => {
    dispatch(newsFetchStart());

    try {
      const { data } = await axiosNews();
      dispatch(newsFetchSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(newsFetchFail());
    }
  };
  return { getNews };
};

export default useNewsCall;
