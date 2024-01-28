import { createSlice } from '@reduxjs/toolkit'

const initialState = {
user:"",
loading:false,
error:false,
token:""

}

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    fetchStart:(state)=>{
        state.loading = true
        state.error = false
    },

    registerSuccess:(state, {payload})=> {
state.loading = false
state.error = false
state.user = payload
    },
    
    loginSuccess:(state, { payload })=> {
state.loading = false
state.error = false
state.user = payload
    },

    logoutSuccess:(state)=> {
        state.error = false
        state.loading = false
        state.user= ""
        state.token = ""
    },

    fetchFail:(state)=>{
        state.loading = false
        state.error = true
    }
  }
});

export const { fetchStart, fetchFail, loginSuccess, logoutSuccess } = AuthSlice.actions

export default AuthSlice.reducer