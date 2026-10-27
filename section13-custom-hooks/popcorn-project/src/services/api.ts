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

function getJsonFromLocalStorage(key: string) {
  const str = localStorage.getItem(key);
  return str !== null ? JSON.parse(str) : [];
}

export function useLocalStorageState<T>(key: string) {
  const [value, setValue] = useState<T>(() => getJsonFromLocalStorage(key));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue] as const;
}

export function useKey(key: string, action: () => void) {
  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      console.log(e);
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };

    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    }
  }, [action, key]);
}