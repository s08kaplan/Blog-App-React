import React from 'react'
import useAxios from './useAxios'
import { fetchProductsFail, fetchProductsStart, getProductsSuccess } from '../FEATURES/ShoppingSlice'
import { useDispatch } from 'react-redux'

const useProductsCall = () => {
    const { axiosShoppingProductsAll } = useAxios()
    const dispatch = useDispatch()

    const getAllProducts = async () => {
       dispatch(fetchProductsStart()) 
       try {
      const data = await axiosShoppingProductsAll()  
      dispatch(getProductsSuccess(data))
      
       } catch (error) {
        dispatch(fetchProductsFail())
        console.log(error);
       }
        
    }
    return { getAllProducts }
}
export default useProductsCall