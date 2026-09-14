import Movie from "./Movie";

type Props = {
  movies: Movie[];
};

function MovieList({ movies }: Props) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
