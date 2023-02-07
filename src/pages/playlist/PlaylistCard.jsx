import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import styles from "./Playlist.module.css";
import { useDispatch } from "react-redux";
import { deletePlaylist } from "../../store/thunks/deletePlaylist";

export default function ({ playlist }) {
  const dispatch=useDispatch();
  const navigate = useNavigate();

  const handleClick = (event, playlist) => {
    event.preventDefault();
  dispatch(deletePlaylist(playlist))
    navigate("/playlist");
  };

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
          <div>
            <div className={styles.playlist__name}>{playlist.title}</div>
            <div className={styles.playlist__videos__info}>
              {playlist?.videos?.length} videos
            </div>
          </div>
          <div
            className={styles.icon}
            onClick={(e) => handleClick(e, playlist)}
            title="Delete Playlist">
            <AiOutlineDelete />
          </div>
        </div>
      </Link>
    </div>
  );
}
