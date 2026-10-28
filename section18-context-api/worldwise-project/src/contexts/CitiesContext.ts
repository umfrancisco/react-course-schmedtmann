import { createContext, useContext } from "react";

export const CitiesContext = createContext<CityContextAPI>(null!);

export function useCitiesContext() {
  const context = useContext(CitiesContext);
  if (context === null) {
    throw new Error("CitiesContext was used outside the CitiesContextProvider");
  }
  return context;
}