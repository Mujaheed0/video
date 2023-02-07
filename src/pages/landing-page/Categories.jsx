import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../store/slices/videoSlice";

export default function () {
  const [categories, setCategories] = useState([]);
 const {category}=useSelector(state=>state.videos.metaData)
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data?.categories);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
let dispatch=useDispatch();
  const handleClick = (categoryName) => {
   dispatch(changeCategory(categoryName));
    navigate("/explore");
  };

  return (
    <div className="p-x-2 p-y-2">
      <div className={styles.categories__heading}>Browse Categories</div>
      <div className={`${styles.categories} p-y-1`}>
        {categories.map(({ id, name, url, description }) => (
          <div
            key={id}
            className={styles.category__card}
            onClick={() => handleClick(name)}>
            <div>
              <img
                src={url}
                alt={name}
                className={styles.category__card__image}
              />
            </div>
            <div className={styles.category__text__container}>
              <div className={styles.category__text__title}>{name}</div>
              <div className={styles.category__text__description}>
                {description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
