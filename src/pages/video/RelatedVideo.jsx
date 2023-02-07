import { useSelector } from "react-redux";
import { VideoCard } from "../../components";
import { getRelatedVideos } from "./Utils";
import styles from "./Video.module.css";
export const RelatedVideo = ({ video }) => {
  const videos = useSelector((state) => state.videos.videos);
  if (video) {
    const relatedVideos = getRelatedVideos(video.category, videos);
    return (
      <>
        <div>
          <h3>Related Videos</h3>
          <div className={styles.related__videos}>
            {relatedVideos.map((video) => {
              return <VideoCard key={video._id} video={video} />;
            })}
          </div>
        </div>
      </>
    );
  }
};
