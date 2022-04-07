import { Link } from "react-router-dom";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import styles from "./Playlist.module.css";

export default function ({ playlist }) {
  return (
    <div className={styles.playlist__container}>
      <Link to={`/playlist/${playlist._id}`}>
        {playlist.videos.length === 0 ? (
          <div className={styles.playlist__empty}>
            <MdOutlinePlaylistAdd fill={`var(--blue9)`} size={35} />
            <>Add videos</>
          </div>
        ) : (
          <div className={styles.playlist__thumbnail}>
            <img src={playlist?.videos?.[0].thumbnail} alt={playlist.title} />
          </div>
        )}
        <div className={styles.playlist__description__container}>
          <div className={styles.playlist__name}>{playlist.title}</div>
          <div className={styles.playlist__videos__info}>
            {playlist?.videos?.length} videos
          </div>
        </div>
      </Link>
    </div>
  );
}
