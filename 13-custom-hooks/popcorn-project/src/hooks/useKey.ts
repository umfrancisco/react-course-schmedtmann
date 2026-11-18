import { useEffect } from "react";

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