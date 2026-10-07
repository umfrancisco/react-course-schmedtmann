import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Logo from "./components/Logo.tsx";
import Search from "./components/Search.tsx";
import NumResults from "./components/NumResults.tsx";
import MovieList from "./components/MovieList.tsx";
import WatchedSummary from "./components/WatchedSummary.tsx";
import WatchedList from "./components/WatchedList.tsx";
import Box from "./components/Box.tsx";
import Loader from "./components/Loader.tsx";
import ErrorMessage from "./components/ErrorMessage.tsx";
import MovieDetails from "./components/MovieDetails.tsx";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watched, setWatched] = useState<Watched[]>(() => JSON.parse(localStorage.watched));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_KEY}&s=${query}`, { signal: controller.signal, })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setError("");
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => setIsLoading(false));

    return () => {
      controller.abort();
    };
  }, [query]);

  function handleSelectMovie(id: string) {
    setSelectedId(id);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie: Watched) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id: string) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} onQuery={setQuery} />
        <NumResults size={movies ? movies.length : 0} />
      </NavBar>
      <Main>
        <Box>
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} query={query} />
          )}
          {isLoading && <Loader />}
          {error && <ErrorMessage error={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} onDeleteWatched={handleDeleteWatched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default App;
