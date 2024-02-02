import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    image: "",
    bio:""
  },
  loading: false,
  error: false,
  token: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.user = {
        ...state.user,
        username: payload.data.username,
        firstName: payload.data.firstName,
        lastName: payload.data.lastName,
        image: payload.data.image,
        email: payload.data.email,
        bio:""
      };

      state.token = payload.token;
    },

    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.user = {
        ...state.user,
        username: payload.user.username,
        firstName: payload.user.firstName,
        lastName: payload.user.lastName,
        email: payload.user.email,
        image: payload.user.image,
        bio:""
      };

      state.token = payload.token;
    },

    logoutSuccess: (state) => {
      state.error = false;
      state.loading = false;
      state.user = "";
      state.token = "";
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} = AuthSlice.actions;

export default AuthSlice.reducer;
