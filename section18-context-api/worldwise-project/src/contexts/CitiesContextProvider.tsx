import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const CitiesContext = createContext<CityContextAPI>(null);

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
  const [currentCity, setCurrentCity] = useState<City>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/cities`)
      .then(res => res.json())
      .then(data => setCities(data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  function getCity(id: string) {
    if (id === currentCity?.id) return;
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/cities/${id}`)
      .then(res => res.json())
      .then(data => setCurrentCity(data))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function createCity(city: City) {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/cities`, {
      method: "POST",
      body: JSON.stringify(city),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(data => setCities(cities => [...cities, data]))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function deleteCity(id: string) {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/cities/${id}`, {
      method: "DELETE",
    })
      .then(() => setCities(cities => cities.filter(city => city.id !== id)))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }

  return (
    <CitiesContext.Provider value={{
      cities,
      setCities,
      isLoading,
      setIsLoading,
      currentCity,
      getCity,
      createCity,
      deleteCity
    }}>
      {children}
    </CitiesContext.Provider>
  );
}

export default CitiesContextProvider;