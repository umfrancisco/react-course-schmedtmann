import { Link } from "react-router-dom";
import { useCitiesContext } from "../contexts/CitiesContextProvider";
import styles from "./CityItem.module.css";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

type Props = {
  city: City;
}

function CityItem({ city }: Props) {
  const { currentCity } = useCitiesContext();
  const activeCity = currentCity && currentCity.id === city.id ? styles["cityItem--active"] : "";

  return (
    <li>
      <Link to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`} className={`${styles.cityItem} ${activeCity}`}>
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>({formatDate(city.date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;