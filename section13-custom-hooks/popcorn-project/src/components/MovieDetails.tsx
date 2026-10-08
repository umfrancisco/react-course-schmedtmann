import { useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";

type Props = {
  selectedId: string | null;
  onCloseMovie: () => void;
  onAddWatched: (movie: Watched) => void;
  watched: Watched[];
};

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }: Props) {
  const [movie, setMovie] = useState<Movie | undefined>();
  const [userRating, setUserRating] = useState<number | undefined>();
  const isWatched =
    selectedId && watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const countRef = useRef(0);
  console.log(countRef.current);
  useEffect(() => {
    if (userRating) {
      countRef.current++;
    }
  }, [userRating]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_KEY}&i=${selectedId}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [selectedId]);


  useEffect(() => {
    if (!movie) return;
    document.title = "Movie | " + movie?.Title;

    return () => {
      document.title = "Popcorn Project";
    };
  }, [movie]);

  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      console.log(e);
      if (e.code === "Escape") {
        onCloseMovie();
      }
    };
    
    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    }
  }, [onCloseMovie]);

  function handleAdd() {
    if (movie && userRating) {
      onAddWatched({
        imdbID: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
        runtime: Number(movie.Runtime?.split(" ")[0]),
        imdbRating: Number(movie.imdbRating),
        userRating: userRating,
        countRating: countRef.current,
      });
      onCloseMovie();
    }
  }

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
            {isWatched ? (
              <p>You rated this movie: {watchedUserRating} stars</p>
            ) : (
              <>
                <StarRating
                  maxRating={10}
                  size={24}
                  onUserRating={setUserRating}
                />
                {userRating && (
                  <button className="btn-add" onClick={handleAdd}>
                    + Add to list
                  </button>
                )}
              </>
            )}
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
