import ListBox from "./ListBox"
import WatchedBox from "./WatchedBox"

type Props = {
  movies: Movie[]
  watched: Watched[]
}

function Main({ movies, watched }: Props) {

  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox watched={watched} />
    </main>
  )
}

export default Main