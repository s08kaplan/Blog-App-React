import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
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
      state.user = payload.data.username;
      state.token = payload.token;
    },

    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.user = payload.user.username;
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

export const { fetchStart, fetchFail, loginSuccess, logoutSuccess, registerSuccess } =
  AuthSlice.actions;

export default AuthSlice.reducer;
