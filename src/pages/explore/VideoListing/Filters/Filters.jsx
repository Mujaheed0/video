
import { Button } from "../../../../components";
import { GrPowerReset } from "react-icons/gr";
import styles from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../../../store/slices/videoSlice";

export default function () {
let dispatch=useDispatch();
const {category}=useSelector(state=>state.videos.metaData)
  const filterBlocks = [
    {
      id: 1,
      text: "All",
    },
    {
      id: 2,
      text: "True Sight",
    },
    {
      id: 3,
      text: "The International",
    },
    {
      id: 4,
      text: "Best Games",
    },
    {
      id: 5,
      text: "PRO POV Highlights",
    },
  ];

  return (
    <div className={`${styles.filters__container} p-y-1 p-x-1 m-y-1`}>
      <div className={styles.filters}>
        {filterBlocks.map((filter) => (
          <>
            <div
              key={filter.id}
              className={`${styles.filter} ${
                category === filter.text && styles.filter__active
              }`}
              onClick={() =>dispatch( changeCategory(filter.text))}>
              {filter.text}
            </div>
          </>
        ))}
        <div className={styles.reset__button}>
          <Button variant="secondary" onClick={() => dispatch(changeCategory("All"))}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
