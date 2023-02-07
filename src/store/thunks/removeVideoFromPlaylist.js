import { createAsyncThunk } from "@reduxjs/toolkit";
import { Toast } from "../../components";
import { removeVideoFromPlaylistHandler } from "../../context/videos/utils/services";

export const removeVideoFromPlaylist = createAsyncThunk(
  "videos/removeVideoFromPlaylist",
  async ({ id, video }) => {
    try {
      const response = await removeVideoFromPlaylistHandler(id, video);
      console.log(response);
      const { playlist } = response?.data;

      Toast
      ({
        type: "success",
        message: `${video.title} has been removed from ${playlist.title} playlist.`,
      });
      return playlist;
    } catch (e) {
      console.log(e);
    }
  }
);
