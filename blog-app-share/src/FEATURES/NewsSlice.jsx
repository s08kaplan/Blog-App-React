import { createSlice } from '@reduxjs/toolkit'

const initialState = {
news:[],
loading:false,
error:false
}

const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
newsFetchStart:(state)=>{
    state.loading = true
    state.error = false
},
newsFetchSuccess:(state, { payload })=> {
    state.loading = false
    state.error = false
    state.news = payload
},

newsFetchFail:(state)=>{
    state.loading = false
    state.error = true
}
  }
});

export const { newsFetchStart, newsFetchSuccess, newsFetchFail } = NewsSlice.actions

export default NewsSlice.reducer