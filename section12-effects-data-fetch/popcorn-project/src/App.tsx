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

const API_KEY = "50b39d14";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [watched, setWatched] = useState<Watched[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [query, setQuery] = useState("hamlet");

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }, [query]);

  console.log(query)

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} onQuery={setQuery}/>
        <NumResults size={movies ? movies.length : 0} />
      </NavBar>
      <Main>
        <Box>
          {!isLoading && !error && <MovieList movies={movies} />}
          {isLoading && <Loader />}
          {error && <ErrorMessage error={error} />}
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </>
  );
}

export default App;
