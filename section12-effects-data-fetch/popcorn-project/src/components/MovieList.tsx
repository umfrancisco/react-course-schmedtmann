import Movie from "./Movie";

type Props = {
  movies: Movie[];
  onSelectMovie: (id: string) => void;
};

function MovieList({ movies, onSelectMovie }: Props) {
  if (!movies) {
    return <p className="error">No movies found...</p>;
  }

  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

export default MovieList;
