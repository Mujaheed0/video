import { useDispatch, useSelector } from "react-redux";
import { Button, Empty } from "../../components";
import { useDocumentTitle } from "../../hooks";
import { clearHistory } from "../../store/thunks/clearHistory";
import styles from "./History.module.css";
import HistoryCard from "./HistoryCard";

export default function () {
  useDocumentTitle("History | AegisTube");

  const { history } = useSelector(state=>state.videos?.metaData);
  console.log(history)
let dispatch=useDispatch()
  return (
    <div className="content-container">
      <div className={styles.container}>
        {history.length === 0 ? (
          <Empty text="Looks like you are new here or you have cleared your watch history 👀" />
        ) : (
          <div>
            <div className={styles.heading}>
              <>History</>
              <Button variant="primary" onClick={() => dispatch(clearHistory())}>
                Clear history
              </Button>
            </div>
            <div className={styles.history__items}>
              {history.map((video) => (
                <HistoryCard key={video._id} video={video} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
