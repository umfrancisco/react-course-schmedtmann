import { useRef } from "react";
import { useKey } from "../services/api";

type Props = {
  query: string;
  onQuery: (query: string) => void;
};

function Search({ query, onQuery }: Props) {
  const inputEl = useRef<HTMLInputElement | null>(null);

  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current?.focus();
    onQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => onQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export default Search;
