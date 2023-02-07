import ReactPlayer from "react-player";
import styles from "./Video.module.css";
import { MdOutlineWatchLater, MdOutlinePlaylistAdd } from "react-icons/md";
import { useParams } from "react-router-dom";
import {
  getVideoData,
  
} from "./Utils";
import { Modal, VideoCard } from "../../components";
import Action from "./Action";
import { useState } from "react";
import PlaylistModal from "./PlaylistModal/PlaylistModal";
import { addToLikedVideos } from "../../store/thunks/addToLikedVideos";
import { useDispatch, useSelector } from "react-redux";
import { removeFromLikedVideos } from "../../store/thunks/removeFromLikedVideos";
import { isInWatchLater, isVideoLiked } from "../../store/slices/videoSlice";
import { addToHistory } from "../../store/thunks/addToHistory";
import { removeFromWatchLater } from "../../store/thunks/removeFromWatchLater";
import { addToWatchLater } from "../../store/thunks/addToWatchLater";
import LikeAction from "./LikeAction";
import { RelatedVideo } from "./RelatedVideo";

export default function () {
  const { videoId } = useParams();
  
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((t) => !t);
  const closeModal = () => setShowModal(false);
let dispatch=useDispatch();
  const video = useSelector(state=>state.videos.videos.find(i=>i.videoId===videoId));
  const isWatchLater = useSelector(state=>isInWatchLater(state,video));
console.log(isWatchLater)
  const actions = [
   
    {
      id: 2,
      icon: <MdOutlineWatchLater />,
      title: "Add Video to Watch Later list",
      name: "Watch Later",
      clickHandler: () => isWatchLater?dispatch(removeFromWatchLater(video)): dispatch(addToWatchLater(video)),
      isAlreadyExists: isWatchLater,
    },
    {
      id: 3,
      icon: <MdOutlinePlaylistAdd />,
      title: "Add Video to a playlist",
      name: "Add to Playlist",
      clickHandler: () => setShowModal(true),
    },
  ];

  return (
    <div className="content-container">
      <div className={styles.video__container}>
        <div className={styles.video__details}>
          <div>
            <ReactPlayer
              url={`http://www.youtube.com/watch?v=${videoId}`}
              controls={true}
              className={styles.video}
              onStart={() =>dispatch( addToHistory(video))}
              width="100%"
              height="100%"
            />
          </div>
          <div className={styles.actions__container}>
            <LikeAction video={video}></LikeAction>
            {actions.map((action) => (
              <Action key={action.id} action={action} />
            ))}
          </div>
          <div className={styles.video__information__container}>
            <div className={styles.video__icon__container}>
              <img
                src={video?.channelIcon}
                alt={video?.channelTitle}
                className={styles.video__icon}
              />
            </div>
            <div className={styles.video__information}>
              <h2 className={styles.video__title}>{video?.title}</h2>
              <div className={styles.video__description}>
                {video?.description}
              </div>
            </div>
          </div>
        </div>
       <RelatedVideo video={video}></RelatedVideo>
      </div>
      <Modal showModal={showModal} header="Playlist" closeModal={closeModal}>
        <PlaylistModal video={video} />
      </Modal>
    </div>
  );
}
