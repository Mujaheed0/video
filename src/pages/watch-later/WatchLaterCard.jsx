import { useDispatch } from "react-redux";
import { WatchIcon } from "../../components";
import { removeFromWatchLater } from "../../store/thunks/removeFromWatchLater";
import styles from "./WatchLater.module.css";

export default function ({ watchLaterVideo }) {
  const dispatch=useDispatch()

  return (
    <div className={styles.card}>
      <div>
        <img
          src={watchLaterVideo?.thumbnail}
          alt={watchLaterVideo?.title}
          className={styles.thumbnail}
        />
      </div>
      <div className={styles.card__description}>
        <div className={styles.title}>{watchLaterVideo?.title}</div>
        <div className={styles.watchlater__container}>
          <WatchIcon
            watchLater={1}
            title="Remove video from watch later"
            onClick={() =>dispatch(removeFromWatchLater(watchLaterVideo))}
          />
        </div>
      </div>
    </div>
  );
}
