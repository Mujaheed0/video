import styles from "./LikedVideos.module.css";
import { useDocumentTitle } from "../../hooks";
import LikedVideoCard from "./LikedVideoCard";
import { Empty } from "../../components";
import { useSelector } from "react-redux";

export default function () {
  useDocumentTitle("Liked | AegisTube");

  const { likedVideos } = useSelector(state=>state.videos.metaData);

  return (
    <div className="content-container">
      {likedVideos?.length === 0 ? (
        <Empty text="Looks like there are no videos that you like. Lets change that. Visit below link" />
      ) : (
        <div className={styles.liked__container}>
          <div className={styles.liked__info}>
            <div className={styles.liked__info__text}>
              You have Liked {likedVideos.length} videos.
            </div>
          </div>
          <div className={styles.liked}>
            {likedVideos.map((likedVideo) => (
              <LikedVideoCard key={likedVideo._id} likedVideo={likedVideo} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
