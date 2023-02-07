import { createAsyncThunk } from "@reduxjs/toolkit";

import { Toast } from "../../components";
import { removeFromHistoryHandler } from "../../context/videos/utils/services";

const removeFromHistory = createAsyncThunk(
  "videos/removeFromHistory",
  async (video,store) => {
    
  
            try {
              const response = await removeFromHistoryHandler(video);
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

export { removeFromHistory };
