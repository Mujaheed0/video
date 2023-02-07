import { useDispatch } from "react-redux";
import { Liked } from "../../components";
import { removeFromLikedVideos } from "../../store/thunks/removeFromLikedVideos";
import styles from "./LikedVideos.module.css";

export default function ({ likedVideo }) {
let dispatch=useDispatch();
  return (
    <div className={styles.card}>
      <div>
        <img
          src={likedVideo.thumbnail}
          alt={likedVideo.title}
          className={styles.thumbnail}
        />
      </div>
      <div className={styles.card__description}>
        <div className={styles.title}>{likedVideo.title}</div>
        <div className={styles.like__container} title="Dislike video">
          <Liked liked={1} onClick={() => dispatch(removeFromLikedVideos(likedVideo))} />
        </div>
      </div>
    </div>
  );
}
