import { createSlice } from "@reduxjs/toolkit";

import { handleSignUp } from "../thunks/handleSignUp";
import { handleLogout } from "../thunks/handleLogout";
import { handleLogin } from "../thunks/handleLogin";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: {},
    error: null,
  },
  reducers:{
    initAuth:(state,action)=>{
      state.isLoggedIn=action.payload.isLoggedIn;
      state.user=action.payload.user
    }
  },

  extraReducers(builder) {
    builder.addCase(handleLogout.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = {};
    });
    builder.addCase(handleSignUp.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(handleSignUp.fulfilled, (state, action) => {
      state.isLoggedIn = true;
    
      state.user = action.payload.user;
    });
    builder.addCase(handleSignUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(handleLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.isLoggedIn = true;

      state.user = action.payload.user;
    });
    builder.addCase(handleLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
const getIsLoggedIn=(state)=>state.auth.isLoggedIn;
export {getIsLoggedIn}
export const {initAuth} = authSlice.actions;
export default authSlice.reducer