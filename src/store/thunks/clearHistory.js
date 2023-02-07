import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "../../components";

const clearHistory = createAsyncThunk(
  "videos/clearHistory",
  async (video,store) => {
    
    
            try {
              const response = await axios.delete(`/api/user/history/all`, {
                headers: {
                  authorization: localStorage.getItem("video-lib-user-token"),
                }});
              if (response.status === 200) {
                
                return (response?.data?.history)
                
              }
            } catch (e) {
              console.error(e);
              Toast({
                type: "error",
                message: "Something went wrong. Try again.",
              });
           
  }}
);

export { clearHistory };
