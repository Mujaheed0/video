import { createAsyncThunk } from "@reduxjs/toolkit";
import { Toast } from "../../components";
import { addNewPlaylistHandler  } from "../../context/videos/utils/services";

const addNewPlaylist = createAsyncThunk(
  "videos/addNewPlaylist",
  async (playlist,store) => {
    
    let globalState=store.getState();
    if(globalState.auth.isLoggedIn){
         {
            try {
              const response = await addNewPlaylistHandler(playlist);
              if (response.status === 201) {
                
                Toast({
                    type: "success",
                    message: `${playlist.title} new Playlist Added`,
                  });
                return (response?.data?.playlists)
                
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

export { addNewPlaylist };
