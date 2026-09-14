import { useState } from "react"
import MovieList from "./MovieList"
import ToggleButton from "./ToggleButton"

type Props = {
  movies: Movie[]
}

function ListBox({ movies }: Props) {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="box">
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <MovieList movies={movies} />
      )}
    </div>
  )
}

export default ListBox