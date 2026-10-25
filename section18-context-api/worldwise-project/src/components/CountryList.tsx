import { useCitiesContext } from "../contexts/CitiesContextProvider";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

const unique = (countries: Country[]) => {
  const n = countries.length;
  const uniqueCountries: Country[] = [];
  for (let i = 0; i < n; i++) {
    const existing = isExisting(uniqueCountries, countries[i].country);
    if (!existing) {
      uniqueCountries.push(countries[i]);
    }
  }
  return uniqueCountries;
}

const isExisting = (countries: Country[], country: string) => {
  const n = countries.length;
  for (let i = 0; i < n; i++) {
    if (country === countries[i].country) {
      return true;
    }
  }
  return false;
}

function CountryList() {
  const { cities, isLoading } = useCitiesContext();

  if (isLoading || !cities) {
    return <Spinner />;
  }

  if (cities) {
    const countries: Country[] = cities.map(city => {
      return { country: city.country, emoji: city.emoji };
    });

    return (
      <ul className={styles.countryList}>
        {unique(countries).map(country => (
          <CountryItem country={country} key={country.country} />
        ))}
      </ul>
    );
  }

  return <Message message="Add your first city by clicking on a city on the map" />;
}

export default CountryList;