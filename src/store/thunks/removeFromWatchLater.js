import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "../../components";
import {  removeFromWatchlaterHandler } from "../../context/videos/utils/services";

const removeFromWatchLater = createAsyncThunk(
  "videos/removeFromWatchLater",
  async (video,store) => {
    
    let globalState=store.getState();
    if(globalState.auth.isLoggedIn){
         {
            try {
              const response = await  axios.delete(`/api/user/watchlater/${video._id}`, {
                headers: {
                  authorization: localStorage.getItem("video-lib-user-token"),
                }})
              if (response.status === 200) {
                
                Toast({
                    type: "success",
                    message: `${video.title} has been removed from watch later videos`,
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

export { removeFromWatchLater };
