import styles from "./Playlist.module.css";
import {
  MdOutlinePlaylistAdd,
  MdOutlinePlaylistAddCheck,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { addVideoToPlaylist } from "../../../store/thunks/addVideoToPlaylist";
import { removeVideoFromPlaylist } from "../../../store/thunks/removeVideoFromPlaylist";

export default function ({ videoInPlaylist, video, playlist }) {
  console.log(video)
  let dispatch=useDispatch();
  return (
    <div
      key={playlist._id}
      className={`${styles.playlist} ${videoInPlaylist && styles.in__playlist}`}
      onClick={() => videoInPlaylist?dispatch(removeVideoFromPlaylist({id:playlist._id,video})): dispatch(addVideoToPlaylist({id:playlist._id, video}))}>
      <div className={styles.playlist__icon}>
        {videoInPlaylist ? (
          <MdOutlinePlaylistAddCheck />
        ) : (
          <MdOutlinePlaylistAdd />
        )}
      </div>
      <div className={styles.playlist__title}>{playlist.title}</div>
    </div>
  );
}
