
type Props = {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

function SearchPosts({ searchQuery, setSearchQuery }: Props) {
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts;