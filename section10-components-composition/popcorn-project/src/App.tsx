import { useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { tempMovieData, tempWatchedData } from "./data.ts";
import Logo from "./components/Logo.tsx";
import Search from "./components/Search.tsx";
import NumResults from "./components/NumResults.tsx";
import ListBox from "./components/ListBox.tsx";
import WatchedBox from "./components/WatchedBox.tsx";

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
        <ListBox movies={movies} />
        <WatchedBox watched={watched} />
      </Main>
    </>
  );
}

export default App;
