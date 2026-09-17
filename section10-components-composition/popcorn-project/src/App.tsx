import { useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { tempMovieData, tempWatchedData } from "./data.ts";
import Logo from "./components/Logo.tsx";
import Search from "./components/Search.tsx";
import NumResults from "./components/NumResults.tsx";
import ListBox from "./components/ListBox.tsx";
import WatchedBox from "./components/WatchedBox.tsx";
import MovieList from "./components/MovieList.tsx";
import WatchedSummary from "./components/WatchedSummary.tsx";
import WatchedList from "./components/WatchedList.tsx";

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults size={movies.length} />
      </NavBar>
      <Main>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>
        <WatchedBox>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </WatchedBox>
      </Main>
    </>
  );
}

export default App;
