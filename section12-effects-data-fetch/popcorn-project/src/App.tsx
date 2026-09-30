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
  const [watched, setWatched] = useState<Watched[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [query, setQuery] = useState("hamlet");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_KEY}&s=${query}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [query]);

  function handleSelectMovie(id: string) {
    setSelectedId(id);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

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
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {isLoading && <Loader />}
          {error && <ErrorMessage error={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default App;
