import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "../../components";


const handleLogin = createAsyncThunk(
  "auth/handleLogin",
  async (loginForm) => {
    try {
      const response = await  axios.post("/api/auth/login", loginForm)

      Toast({ message: "You have successsfully logged in", type: "success" });

      return response.data
    } catch (e) {
      Toast({
        message: "Invalid credentials. Please try again.",
        type: "error",
      });
      
    }
  }
);

export { handleLogin };
