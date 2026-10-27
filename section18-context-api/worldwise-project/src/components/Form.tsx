// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./Form.module.css";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import Spinner from "./Spinner";


function Form() {
  const [cityName, setCityName] = useState("");
  const [_, setCountryName] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [date, setDate] = useState(new Date());
  const [geocodeError, setGeocodingError] = useState("");
  const [notes, setNotes] = useState("");
  const { lat, lng } = useUrlPosition();

  useEffect(() => {
    setIsLoadingGeocoding(true);
    setGeocodingError("");
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
      .then(res => res.json())
      .then(data => {
        if (!data.countryCode) {
          throw new Error("That doesn't seem to be a city. Click somewhere else.");
        }
        setCityName(data.city || data.locality || "");
        setCountryName(data.countryName);
      })
      .catch(err => setGeocodingError(err.message))
      .finally(() => setIsLoadingGeocoding(false));
  }, [lat, lng]);

  function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  if (isLoadingGeocoding) {
    return <Spinner />
  }

  if (geocodeError) {
    return <Message message={geocodeError} />;
  }

  return (
    <form className={styles.form} onSubmit={submit}>

      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(new Date(e.target.value))}
          value={date.toLocaleString()}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button onClick={() => ""} type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
