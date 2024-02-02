import axios from "axios"
import { useSelector } from "react-redux";

const useAxios = () => {
   const { token } = useSelector(state=> state.auth)

    const axiosPublic = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
      });

      const axiosWithToken = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        headers: {Authorization: `Token ${token}`}
      });
    
      const axiosNews = axios.create({
        baseURL: `${import.meta.env.VITE_NEWS_BASE_URL}`,
      });

      const axiosShoppingProductsAll = axios.create({
        baseURL: `${import.meta.env.VITE_SHOPPING_BASE_URL}`,
      });

  return { axiosPublic, axiosWithToken, axiosNews, axiosShoppingProductsAll }
}

export default useAxios