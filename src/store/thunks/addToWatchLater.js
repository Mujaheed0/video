import { createAsyncThunk } from "@reduxjs/toolkit";

import { Toast } from "../../components";
import { addVideosToWatchLaterHandler } from "../../context/videos/utils/services";
const addToWatchLater = createAsyncThunk(
  "videos/addToWatchLater",
  async (video,store) => {
    
    let globalState=store.getState();
    if(globalState.auth.isLoggedIn){
         {
            try {
              const response = await addVideosToWatchLaterHandler(video);
              if (response.status === 201) {
                
                Toast({
                    type: "success",
                    message: `${video.title} has been added to watch later `,
                  });
                return (response?.data?.watchlater)
                
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

export { addToWatchLater };
