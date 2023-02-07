import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "../components";
import RequiresAuth from "./RequiresAuth";
import RedirectAuth from "./RedirectAuth";
import { nanoid } from "@reduxjs/toolkit";
const LandingPage = lazy(() => import("../pages/landing-page/LandingPage"));
const ApiResponse = lazy(() => import("../pages/api-response/ApiResponse"));
const Explore = lazy(() => import("../pages/explore/Explore"));
const Video = lazy(() => import("../pages/video/Video"));
const Login = lazy(() => import("../pages/auth/login/Login"));
const Signup = lazy(() => import("../pages/auth/signup/Signup"));
const NotFound = lazy(() => import("../pages/Error/NotFound"));
const History = lazy(() => import("../pages/history/History"));
const Playlist = lazy(() => import("../pages/playlist/Playlist"));
const IndividualPlaylist = lazy(() =>
  import("../pages/playlist/IndividualPlaylist/IndividualPlaylist")
);
const WatchLater = lazy(() => import("../pages/watch-later/WatchLater"));
const Liked = lazy(() => import("../pages/liked-videos/LikedVideos"));

export default function () {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/mockbee" element={<ApiResponse />} key={nanoid()} />
        <Route path="/" element={<LandingPage />} key={nanoid()} />
        <Route path="/explore" element={<Explore />} key={nanoid()} />
        <Route element={<RedirectAuth />} key={nanoid()}>
          <Route path="/auth/login" element={<Login />} key={nanoid()} />
          <Route path="/auth/signup" element={<Signup />} key={nanoid()} />
        </Route>
        <Route element={<RequiresAuth />} key={nanoid()}>
          <Route path="/video/:videoId" element={<Video />} key={nanoid()} />
          <Route path="/history" element={<History />} key={nanoid()} />
          <Route path="/playlist" element={<Playlist />} key={nanoid()} />
          <Route
            path="/playlist/:playlistId"
            element={<IndividualPlaylist />} key={nanoid()}
          />
          <Route path="/watch-later" element={<WatchLater />} key={nanoid()} />
          <Route path="/liked-videos" element={<Liked />} key={nanoid()} />
        </Route>
        <Route path="*" element={<NotFound />} key={nanoid()} />
      </Routes>
    </Suspense>
  );
}
