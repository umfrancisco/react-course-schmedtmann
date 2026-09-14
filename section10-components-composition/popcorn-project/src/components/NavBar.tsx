import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

type Props = {
  movies: Movie[];
};

function NavBar({ movies }: Props) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults size={movies.length} />
    </nav>
  );
}

export default NavBar;
