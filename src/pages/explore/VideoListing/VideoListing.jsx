
import Filters from "./Filters/Filters";
import { VideoCard } from "../../../components";
import styles from "./VideoListing.module.css";
import { useDispatch, useSelector } from "react-redux";
import { videosToShow } from "../../../store/slices/videoSlice";
import { useEffect } from "react";
import { initVideos } from "../../../store";

export default function () {
  const  videos  = useSelector(videosToShow);

  let dispatch=useDispatch();
  useEffect(()=>{
    dispatch(initVideos())
  },[])
  return (
    <div>
      <Filters />
      <div className={styles.videos}>
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}
