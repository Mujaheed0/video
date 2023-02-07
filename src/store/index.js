import { configureStore } from '@reduxjs/toolkit';
import  authReducer  from './slices/authSlice';
import  videoReducer  from './slices/videoSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    videos:videoReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
    
  },
});

export * from './thunks/initVideos';
export * from './thunks/handleLogin';
export * from './thunks/handleLogout';
export * from './thunks/handleSignUp';