import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromHistory } from "../../store/thunks/removeFromHistory";
import styles from "./History.module.css";

export default function ({ video }) {
  const dispatch=useDispatch()

  return (
    <div className={styles.card}>
      <div className={styles.card__thumbnail}>
        <img src={video?.thumbnail} alt={video?.title} />
      </div>
      <div className={styles.card__description__container}>
        <div>
          <div className={styles.card__title}>{video?.title}</div>
          <div className={styles.card__description}>{video?.description}</div>
        </div>
        <div
          className={styles.icon}
          onClick={() => dispatch(removeFromHistory(video))}
          title="Remove video from watch history">
          <AiOutlineDelete />
        </div>
      </div>
    </div>
  );
}
