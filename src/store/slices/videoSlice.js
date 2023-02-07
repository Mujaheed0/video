import { createSlice } from "@reduxjs/toolkit";
import {
  filterByCategory,
  getResultantVideos,
} from "../../context/videos/utils/helperFunctions";
import { addToHistory } from "../thunks/addToHistory";
import { addToLikedVideos } from "../thunks/addToLikedVideos";
import { initVideos } from "../thunks/initVideos";
import { clearHistory } from "../thunks/clearHistory";
import { removeFromLikedVideos } from "../thunks/removeFromLikedVideos";
import { removeFromHistory } from "../thunks/removeFromHistory";
import { addToWatchLater } from "../thunks/addToWatchLater";
import { removeFromWatchLater } from "../thunks/removeFromWatchLater";

import { AddPlaylistForm } from "../../components";
import { addNewPlaylist } from "../thunks/addNewPlaylist";
import { deletePlaylist } from "../thunks/deletePlaylist";
import { addVideoToPlaylist } from "../thunks/addVideoToPlaylist";
import { removeVideoFromPlaylist } from "../thunks/removeVideoFromPlaylist";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    metaData: {
      category: "All",
      likedVideos: [],
      watchLater: [],
      history: [],
      playlists: [],
    },
  },
  reducers: {
    changeCategory: (state, action) => {
      state.metaData.category = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(initVideos.fulfilled, (state, action) => {
      state.videos = action.payload;
    });
    builder.addCase(addToLikedVideos.fulfilled, (state, action) => {
      state.metaData.likedVideos = action.payload;
    });
    builder.addCase(removeFromLikedVideos.fulfilled, (state, action) => {
      state.metaData.likedVideos = action.payload;
    });
    builder.addCase(addToWatchLater.fulfilled, (state, action) => {
      state.metaData.watchLater = action.payload;
    });
    builder.addCase(removeFromWatchLater.fulfilled, (state, action) => {
      state.metaData.watchLater = action.payload;
    });
    builder.addCase(addToHistory.fulfilled, (state, action) => {
      console.log(action);
      state.metaData.history = action.payload;
    });
    builder.addCase(removeFromHistory.fulfilled, (state, action) => {
      state.metaData.history = action.payload;
    });

    builder.addCase(clearHistory.fulfilled, (state, action) => {
      state.metaData.history = [];
    }),
      builder.addCase(addNewPlaylist.fulfilled, (state, action) => {
        state.metaData.playlists = action.payload;
      }),
      builder.addCase(deletePlaylist.fulfilled, (state, action) => {
        state.metaData.playlists = action.payload;
      });
    builder.addCase(addVideoToPlaylist.fulfilled, (state, action) => {
      console.log(action.payload);
      state.metaData.playlists.map((i) => {
        if ((i._id === action.payload._id)) i.videos = action.payload.videos;
      
      });
    }),
      builder.addCase(removeVideoFromPlaylist.fulfilled, (state, action) => {
        console.log(action.payload);
        state.metaData.playlists.map((i) => {
          if ((i._id === action.payload._id)) i.videos = action.payload.videos;
        
        });
      });
  },
});
const videosToShow = (state) => {
  let { videos, metaData } = state.videos;
  return getResultantVideos(metaData, filterByCategory)(videos);
};
const isVideoLiked = (state, video) => {
  let { metaData } = state.videos;
  return (
    metaData.likedVideos?.some((likedVideo) => likedVideo._id === video._id) ||
    false
  );
};
const isInWatchLater = (state, video) => {
  let { metaData } = state.videos;
  return metaData.watchLater?.some((i) => i._id === video._id) || false;
};
export const { changeCategory } = videoSlice.actions;
export { videosToShow, isVideoLiked, isInWatchLater };
export default videoSlice.reducer;
