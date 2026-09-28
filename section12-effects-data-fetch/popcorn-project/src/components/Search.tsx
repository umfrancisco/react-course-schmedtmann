
type Props = {
  query: string
  onQuery: (query: string) => void
}

function Search({ query, onQuery }: Props) {

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onQuery(e.target.value)}
    />
  );
}

export default Search;
