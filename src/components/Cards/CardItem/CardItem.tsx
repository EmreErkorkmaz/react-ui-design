import { Link } from "react-router-dom";
import styles from "./CardItem.module.scss";

const CardItem = (props: any) => {
  const { src, text, label, path } = props;
  return (
    <>
      <li className={styles["cards__item"]}>
        <Link to={path} className={styles["cards__item__link"]}>
          <figure className={styles["cards__item__pic-wrap"]} data-category={label}>
            <img className={styles["cards__item__img"]} src={src} alt={label} />
          </figure>
          <div className={styles["cards__item__info"]}>
            <h5 className={styles["cards__item__text"]}>{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
