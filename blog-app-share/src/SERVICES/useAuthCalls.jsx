import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../FEATURES/AuthSlice"
import { useNavigate } from "react-router-dom"


const useAuthCalls = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
const { axiosPublic, axiosWithToken } = useAxios()


const register = async (userInfo) => {
    dispatch(fetchStart())

    try {
        const { data } = await axiosPublic.post("users/", userInfo)
        dispatch(registerSuccess(data))
        navigate("/blog")
    } catch (error) {
        dispatch(fetchFail())
        console.log(error);
    }
}

    const login = async (userInfo) => {
        dispatch(fetchStart())
        try {
          const { data } = await axiosPublic.post("auth/login", userInfo) 
          dispatch(loginSuccess(data)) 
           navigate("/blog")
        } catch (error) {
            dispatch(fetchFail())
          console.log(error);  
        }

    }

    const logout = async () => {
       
        try {
           await axiosPublic.get("auth/logout") 
          dispatch(logoutSuccess()) 
           navigate("/")
        } catch (error) {
            dispatch(fetchFail())
          console.log(error);  
        }

    }


  return { register, login, logout }
}

export default useAuthCalls