import ReactPlayer from "react-player";
import styles from "./Video.module.css";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineWatchLater, MdOutlinePlaylistAdd } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useVideos } from "../../context/videos/Context";
import {
  getVideoData,
  getRelatedVideos,
  isVideoLiked,
  isVideoInWatchLater,
} from "./Utils";
import { VideoCard } from "../../components";
import Action from "./Action";

export default function () {
  const { id } = useParams();
  const { videos, addToLikedVideos, likedVideos, addToWatchlater, watchLater } =
    useVideos();

  const video = getVideoData(id, videos);
  const relatedVideos = getRelatedVideos(video?.category, videos);
  const isLiked = isVideoLiked(video, likedVideos);
  const isInWatchlater = isVideoInWatchLater(video, watchLater);

  const actions = [
    {
      id: 1,
      icon: <AiOutlineLike />,
      name: "Like",
      clickHandler: () => addToLikedVideos(video),
      isAlreadyExists: isLiked,
    },
    {
      id: 2,
      icon: <MdOutlineWatchLater />,
      name: "Watch Later",
      clickHandler: () => addToWatchlater(video),
      isAlreadyExists: isInWatchlater,
    },
    { id: 3, icon: <MdOutlinePlaylistAdd />, name: "Add to Playlist" },
  ];

  return (
    <div className="content-container">
      <div className={styles.video__container}>
        <div className={styles.video__details}>
          <div>
            <ReactPlayer
              url={`http://www.youtube.com/watch?v=${id}`}
              controls={true}
              className={styles.video}
              width="100%"
              height="100%"
            />
          </div>
          <div className={styles.actions__container}>
            {actions.map((action) => (
              <Action key={action.id} action={action} />
            ))}
          </div>
          <div className={styles.video__information}>
            <h1 className={styles.video__title}>{video?.title}</h1>
            <div className={styles.video__description}>
              {video?.description}
            </div>
          </div>
        </div>
        <div>
          <h3>Related Videos</h3>
          <div className={styles.related__videos}>
            {relatedVideos.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
