import { createSlice } from '@reduxjs/toolkit'

const initialState = {
users:[],
categories:[],
blogs:[],
comments:[],
loading:false,
error:false
}

const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchStart:(state)=>{
        state.loading = true
        state.error = false
    },

getAllData:(state, { payload })=> {
state.loading = false
state.error = false
state.users = payload[0]
state.categories = payload[1]
state.blogs = payload[2]
state.comments = payload[3]

},

    fetchFail:(state)=> {
        state.loading = false
        state.error = true
    }
  }
});

export const { fetchStart, fetchFail, getAllData } = BlogSlice.actions

export default BlogSlice.reducer