import { AiOutlineLike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { isVideoLiked } from "../../store/slices/videoSlice";
import { addToLikedVideos } from "../../store/thunks/addToLikedVideos";
import { removeFromLikedVideos } from "../../store/thunks/removeFromLikedVideos";

import styles from "./Video.module.css";

export default function LikeAction( {video}) {
    
  const isLiked = useSelector((state)=>isVideoLiked(state,video));
    let dispatch=useDispatch();
  return (
    <div
      
      className={`${styles.action} ${
        isLiked && styles.selected
      }`}
      title="Like"
      onClick={() =>isLiked? dispatch(removeFromLikedVideos(video)):dispatch(addToLikedVideos(video))}>
      <div className={styles.action__icon}> <AiOutlineLike /></div>
      <div className={styles.action__name}>Like</div>
    </div>
  );
}
