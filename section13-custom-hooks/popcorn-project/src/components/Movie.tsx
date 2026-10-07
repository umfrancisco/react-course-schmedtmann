import { useState } from "react";

type Props = {
  movie: Movie;
  onSelectMovie: (id: string) => void;
};

function Movie({ movie, onSelectMovie }: Props) {
  const [status, setStatus] = useState("");

  fetch(movie.Poster)
    .then((res) => setStatus(res.status.toString()))
    .catch((err) => console.log("ERROR: ", err));

  if (status !== "200") return null;

  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
