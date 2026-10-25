import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const CitiesContext = createContext<CityContextAPI>(null!);

export function useCitiesContext() {
  const context = useContext(CitiesContext);
  if (context === null) {
    throw new Error("CitiesContext was used outside the CitiesContextProvider");
  }
  return context;
}

type Props = {
  children: ReactNode;
}

function CitiesContextProvider({ children }: Props) {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${import.meta.env.VITE_API_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        console.log("ERROR");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider value={{
      cities,
      setCities,
      isLoading,
      setIsLoading
    }}>
      {children}
    </CitiesContext.Provider>
  );
}

export default CitiesContextProvider;