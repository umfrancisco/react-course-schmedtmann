import { useParams, useSearchParams } from "react-router-dom";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <>
      <h2>City {id}</h2>
      <p>Position: {lat}, {lng}</p>
    </>
  );

  // return (
  //   <div className={styles.city}>
  //     <div className={styles.row}>
  //       <h6>City name</h6>
  //       <h3>
  //         <span>{currentCity.emoji}</span> {currentCity.cityName}
  //       </h3>
  //     </div>

  //     <div className={styles.row}>
  //       <h6>You went to {currentCity.cityName} on</h6>
  //       <p>{formatDate(currentCity.date)}</p>
  //     </div>

  //     {currentCity.notes && (
  //       <div className={styles.row}>
  //         <h6>Your notes</h6>
  //         <p>{currentCity.notes}</p>
  //       </div>
  //     )}

  //     <div className={styles.row}>
  //       <h6>Learn more</h6>
  //       <a
  //         href={`https://en.wikipedia.org/wiki/${currentCity.cityName}`}
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         Check out {currentCity.cityName} on Wikipedia &rarr;
  //       </a>
  //     </div>
  //   </div>
  // );
}

export default City;
