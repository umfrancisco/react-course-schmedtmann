import Movie from "./Movie";

type Props = {
  movies: Movie[];
  onSelectMovie: (id: string) => void;
  query: string
};

function MovieList({ movies, onSelectMovie, query }: Props) {
  const sorted = movies?.sort((a, b) => Number(b.Year) - Number(a.Year));

  if (query === "") {
    return null;
  }

  if (!movies) {
    return <p className="error">No movies found...</p>;
  }

  return (
    <ul className="list list-movies">
      {sorted?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

export default MovieList;
