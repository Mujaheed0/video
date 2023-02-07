import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "../../components";

export const addVideoToPlaylist =createAsyncThunk("videos/addVideoToPlaylist", async ({id,video}) => {
   try{
          const response = await  axios.post(
            `/api/user/playlists/${id}`,
            { video },
            {
              headers: {
                authorization: localStorage.getItem("video-lib-user-token"),
              },
            }
          );
          console.log(response)
          const { playlist } = response?.data;
         
          Toast({
            type: "success",
            message: `${video.title} has been added to ${playlist.title} playlist.`,
          });
          return playlist;}
          catch(e){ console.log(e)}
  })