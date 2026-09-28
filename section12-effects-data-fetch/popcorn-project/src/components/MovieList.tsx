import Movie from "./Movie";

type Props = {
  movies: Movie[];
};

function MovieList({ movies }: Props) {

  if (!movies) {
    return (
      <p className="error">No movies found...</p>
    )
  }

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
