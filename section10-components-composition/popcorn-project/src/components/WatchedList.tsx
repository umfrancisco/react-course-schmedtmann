import WatchedMovie from "./WatchedMovie"

type Props = {
  watched: Watched[]
}

function WatchedList({ watched }: Props) {

  return (
    <ul className="list">
      {watched.map((movie) => <WatchedMovie key={movie.imdbID} movie={movie}/>)}
    </ul>
  )
}

export default WatchedList