import { useEffect, useRef } from "react";

type Props = {
  query: string;
  onQuery: (query: string) => void;
};

function Search({ query, onQuery }: Props) {
  const inputEl = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      if (document.activeElement === inputEl.current) {
        return;
      }
      if (inputEl.current && e.code === "Enter") {
        inputEl.current.focus();
        onQuery("");
      }
    }

    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keydown", callback);
  }, [onQuery]);

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
