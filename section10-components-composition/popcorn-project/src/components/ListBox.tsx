import { useState } from "react"

type Props = {
  movies: Movie[]
}

function ListBox({ movies }: Props) {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && (
        <ul className="list">
          {movies?.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.poster} alt={`${movie.title} poster`} />
              <h3>{movie.title}</h3>
              <div>
                <p>
                  <span>🗓</span>
                  <span>{movie.year}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListBox