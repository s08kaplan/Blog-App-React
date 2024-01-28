import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from "../FEATURES/AuthSlice"

const store = configureStore({
    reducer:{
       auth: AuthReducer 

    }
})

export default store


