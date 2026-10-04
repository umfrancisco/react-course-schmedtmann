import WatchedMovie from "./WatchedMovie";

type Props = {
  watched: Watched[];
  onDeleteWatched: (id: string) => void;
};

function WatchedList({ watched, onDeleteWatched }: Props) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} onDeleteWatched={onDeleteWatched} />
      ))}
    </ul>
  );
}

export default WatchedList;
