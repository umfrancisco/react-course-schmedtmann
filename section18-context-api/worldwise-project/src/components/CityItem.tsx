import { Link } from "react-router-dom";
import { useCitiesContext } from "../contexts/CitiesContextProvider";
import styles from "./CityItem.module.css";
import { formatDate } from "../utils/formatDate";

type Props = {
  city: City;
}

function CityItem({ city }: Props) {
  const { currentCity } = useCitiesContext();
  const activeCity = currentCity && currentCity.id === city.id ? styles["cityItem--active"] : "";

  return (
    <li>
      <Link to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`} className={`${styles.cityItem} ${activeCity}`}>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>({formatDate(city.date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;