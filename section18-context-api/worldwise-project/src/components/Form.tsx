// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useCitiesContext } from "../contexts/CitiesContext";
import { useUrlPosition } from "../hooks/useUrlPosition";
import BackButton from "./BackButton";
import Button from "./Button";
import styles from "./Form.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import type { City } from "../types";

function Form() {
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [date, setDate] = useState<Date | null>(new Date());
  const [geocodeError, setGeocodingError] = useState("");
  const [notes, setNotes] = useState("");
  const { lat, lng } = useUrlPosition();
  const { createCity, isLoading } = useCitiesContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!lat && !lng) {
      return;
    }

    setIsLoadingGeocoding(true);
    setGeocodingError("");
    fetch(`${import.meta.env.VITE_GEOCODE_API}?latitude=${lat}&longitude=${lng}`)
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

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!cityName || !date) {
      return;
    }

    const countryNameArr = countryName.split(" ");
    const country = (countryNameArr.length <= 1 || countryName.length <= 30) ? countryName : countryNameArr[0]+" "+countryNameArr[1];

    const newCity: City = {
      cityName,
      country,
      emoji: "",
      date,
      notes,
      position: {
        lat,
        lng
      },
      id: Math.round(Math.random() * 1000).toString()
    }

    createCity(newCity);
    navigate("/app/cities");
  }

  if (!lat && !lng) {
    return <Message message="Start by clicking on the map" />
  }

  if (isLoadingGeocoding) {
    return <Spinner />
  }

  if (geocodeError) {
    return <Message message={geocodeError} />;
  }

  return (
    <form className={`${styles.form} ${isLoading ? styles.loading : ""}`} onSubmit={handleSubmit}>

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
        {/* <input
          id="date"
          onChange={(e) => setDate(new Date(e.target.value))}
          value={date.toLocaleString()}
        /> */}
        <DatePicker selected={date} onChange={(date: Date | null) => setDate(date)} />
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
