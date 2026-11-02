import { createContext, useContext } from "react";
import type { CityContextType } from "../types";

export const CitiesContext = createContext<CityContextType>(null!);

export function useCitiesContext() {
  const context = useContext(CitiesContext);
  if (context === null) {
    throw new Error("CitiesContext was used outside the CitiesContextProvider");
  }
  return context;
}