import { createContext, useContext, useEffect, useReducer, type ReactNode } from "react";

export const CitiesContext = createContext<CityContextAPI>(null!);

export function useCitiesContext() {
  const context = useContext(CitiesContext);
  if (context === null) {
    throw new Error("CitiesContext was used outside the CitiesContextProvider");
  }
  return context;
}

const initialState: State = {
  cities: [],
  isLoading: false,
  currentCity: undefined,
  error: null,
}

function reducer(state: State, action: PayloadAction) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };
    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };
    case "city/created":
      const added = [...state.cities, action.payload];
      return { ...state, isLoading: false, cities: added, currentCity: action.payload };
    case "city/deleted":
      const updated = state.cities.filter(city => city.id !== action.payload);
      return { ...state, isLoading: false, cities: updated };
    case "rejected":
      return { ...state, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

type Props = {
  children: ReactNode;
}

function CitiesContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cities, isLoading, currentCity } = state;

  useEffect(() => {
    dispatch({ type: "loading" });
    fetch(`${import.meta.env.VITE_API_URL}/cities`)
      .then(res => res.json())
      .then(data => dispatch({ type: "cities/loaded", payload: data }))
      .catch(err => dispatch({ type: "rejected", payload: err }));
  }, []);

  function getCity(id: string) {
    if (id === currentCity?.id) return;
    dispatch({ type: "loading" });
    fetch(`${import.meta.env.VITE_API_URL}/cities/${id}`)
      .then(res => res.json())
      .then(data => dispatch({ type: "city/loaded", payload: data }))
      .catch(err => dispatch({ type: "rejected", payload: err }));
  }

  function createCity(city: City) {
    dispatch({ type: "loading" });
    fetch(`${import.meta.env.VITE_API_URL}/cities`, {
      method: "POST",
      body: JSON.stringify(city),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(data => dispatch({ type: "city/created", payload: data }))
      .catch(err => dispatch({ type: "rejected", payload: err }));
  }

  function deleteCity(id: string) {
    dispatch({ type: "loading" });
    fetch(`${import.meta.env.VITE_API_URL}/cities/${id}`, {
      method: "DELETE",
    })
      .then(() => dispatch({ type: "city/deleted", payload: id }))
      .catch(err => dispatch({ type: "rejected", payload: err }));
  }

  return (
    <CitiesContext.Provider value={{
      cities,
      isLoading,
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