import { createAsyncThunk } from "@reduxjs/toolkit";
import { Toast } from "../../components";
import { deletePlaylistHandler } from "../../context/videos/utils/services";

export const deletePlaylist = createAsyncThunk ('videos/deletePlaylist',async(playlist) => {
  
      try {
        const response = await deletePlaylistHandler(playlist?._id);
        
        Toast({
          type: "success",
          message: `Playlist with name ${playlist.title} has been deleted `,
        });
        return response.data?.playlists;
      } catch (e) {
        console.error(e);
        Toast({ type: "error", message: "Something went wrong" });
      }
    
  });