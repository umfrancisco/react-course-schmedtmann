import { useEffect, useState } from "react";

export function useLocalStorageState<T>(key: string) {
  const [value, setValue] = useState<T>(() => getJsonFromLocalStorage(key));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue] as const;
}

function getJsonFromLocalStorage(key: string) {
  const str = localStorage.getItem(key);
  return str !== null ? JSON.parse(str) : [];
}