import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "../../components";
import { addVideosToLikedVideosHandler } from "../../context/videos/utils/services";
import { removeFromLikedVideos } from "./removeFromLikedVideos";

const addToLikedVideos = createAsyncThunk(
  "videos/addToLikedVideos",
  async (video,store) => {
    
    let globalState=store.getState();
    if(globalState.auth.isLoggedIn){
         {
            try {
              const response = await addVideosToLikedVideosHandler(video);
              if (response.status === 201) {
                
                Toast({
                    type: "success",
                    message: `${video.title} has been added to liked videos`,
                  });
                return (response?.data?.likes)
                
              }
            } catch (e) {
              console.error(e);
              Toast({
                type: "error",
                message: "Something went wrong. Try again.",
              });
            }
          }
  }}
);

export { addToLikedVideos };
