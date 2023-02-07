
import { checkVideoInPlayList } from "../Utils";
import { AddPlaylistForm } from "../../../components";
import styles from "./Playlist.module.css";
import PlaylistItem from "./PlaylistItem";
import { useSelector } from "react-redux";

export default function ({ video }) {
  console.log(video)
const {playlists}=useSelector(state=>state.videos.metaData);
if(video){
  return (
    <div className={styles.modal}>
      <div className={`${styles.playlists}`}>
        {playlists.length === 0 ? (
          "Create a playlist"
        ) : (
          <>
            {playlists.map((playlist) => (
              <PlaylistItem
                videoInPlaylist={checkVideoInPlayList(video, playlist)}
                video={video}
                playlist={playlist}
              />
            ))}
          </>
        )}
      </div>
      <div className={styles.form__container}>
        <AddPlaylistForm />
      </div>
    </div>
  );
}}
