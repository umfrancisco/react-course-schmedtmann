import { useState } from "react";
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
import { useLocalStorageState } from "./hooks/useLocalStorageState.ts";
import { useMovies } from "./hooks/useMovies.ts";

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [watched, setWatched] = useLocalStorageState<Watched[]>("watched");
  const { movies, isLoading, error } = useMovies(query);

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
