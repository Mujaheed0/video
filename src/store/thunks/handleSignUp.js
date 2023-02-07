import { createAsyncThunk } from "@reduxjs/toolkit";
import { Toast } from "../../components";
import axios from "axios";
const handleSignUp = createAsyncThunk(
  "auth/handleSignUp",
  async (signupForm) => {
    try {
      const response = await axios.post("/api/auth/signup", signupForm);
      Toast({ message: "You have successsfully signed up", type: "success" });
    console.log(response.data)
      return response.data;
    } catch (e) {
      Toast({
        message: "Invalid credentials. Please try again.",
        type: "error",
      });
    }
  }
);

export { handleSignUp };
