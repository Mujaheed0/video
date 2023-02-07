import { createAsyncThunk } from "@reduxjs/toolkit";

import { Toast } from "../../components";
import { addToHistoryHandler } from "../../context/videos/utils/services";

const addToHistory = createAsyncThunk(
  "videos/addToHistory",
  async (video,store) => {
   
              const response = await addToHistoryHandler(video);
          
              if (response.status === 201) {
                
                return (response?.data?.history)
                
              }
            }
);

export { addToHistory };
