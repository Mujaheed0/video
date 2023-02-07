import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initVideos = createAsyncThunk("videos/initVideos", async () => {
  try {
    const response = await axios.get("/api/videos");
    return response?.data?.videos;
  } catch (e) {
    console.log(e);
  }
});

export { initVideos };
