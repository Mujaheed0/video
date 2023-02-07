import { createAsyncThunk } from "@reduxjs/toolkit";

import { Toast } from "../../components";
const handleLogout = createAsyncThunk(
  "auth/handleLogout",
   () => {
try{
      Toast({ message: "You have successsfully logged out", type: "success" });

    } catch (e) {
      Toast({
        message: "Could not log you out. Please try again.",
        type: "error",
      });
      
    }
  }
);

export { handleLogout };
