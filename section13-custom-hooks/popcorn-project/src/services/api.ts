import { useEffect, useState } from "react";

export function useMovies(query: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_KEY}&s=${query}`, { signal: controller.signal, })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setError("");
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => setIsLoading(false));

    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}