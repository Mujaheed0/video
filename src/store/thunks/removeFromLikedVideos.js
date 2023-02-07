import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "../../components";
import { removeFromLikedVideosHandler } from "../../context/videos/utils/services";

const removeFromLikedVideos = createAsyncThunk(
  "videos/removeFromLikedVideos",
  async (video,) => {
            try {
              const response = await removeFromLikedVideosHandler(video);
              if (response.status === 200) {
                
                Toast({
                    type: "success",
                    message: `${video.title} has been removed from liked videos`,
                  });
                return (response?.data?.likes)
                
              }
            } catch (e) {
              console.error(e);
              Toast({
                type: "error",
                message: "Something went wrong. Try again.",
              });
            
          
  }}
);

export { removeFromLikedVideos };
