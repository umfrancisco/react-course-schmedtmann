import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";

type Props = {
  selectedId: string | null;
  onCloseMovie: () => void;
};

function MovieDetails({ selectedId, onCloseMovie }: Props) {
  const [movie, setMovie] = useState<Movie | undefined>();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_KEY}&i=${selectedId}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [selectedId]);

  if (movie) {
    return (
      <div className="details">
        <header>
          <button className="btn-back" onClick={onCloseMovie}>
            &larr;
          </button>
          <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
          <div className="details-overview">
            <h2>{movie.Title}</h2>
            <p>
              {movie.Released} &bull; {movie.Runtime}
            </p>
            <p>{movie.Genre}</p>
            <p>
              <span>⭐</span>
              {movie.imdbRating} IMDb rating
            </p>
          </div>
        </header>
        <section>
          <div className="rating">
            <StarRating maxRating={10} size={24} />
          </div>
          <p>
            <em>{movie.Plot}</em>
          </p>
          <p>Starring {movie.Actors}</p>
          <p>Directed by {movie.Director}</p>
        </section>
      </div>
    );
  }

  return <Loader />;
}

export default MovieDetails;
