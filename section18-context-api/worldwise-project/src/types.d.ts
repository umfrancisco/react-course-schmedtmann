
declare type City = {
  cityName: string;
  country: string;
  emoji: string;
  date: Date;
  notes: string;
  position: {
    lat: number;
    lng: number;
  }
  id: string;
}

declare type Position = {
  lat: number;
  lng: number;
}

declare type CityContextAPI = {
  cities: City[];
  isLoading: boolean;
  currentCity: City | undefined;
  getCity: (id: string) => void;
  createCity: (city: City) => void;
  deleteCity: (id: string) => void;
}

declare type Country = {
  country: string;
  emoji: string;
}

declare type State = {
  cities: City[];
  isLoading: boolean;
  currentCity: City | undefined;
  error: Error | null;
}

declare type PayloadAction = {
  type: "loading";
} | {
  type: "cities/loaded", payload: City[];
} | {
  type: "city/loaded", payload: City;
} | {
  type: "city/created", payload: City;
} | {
  type: "city/deleted", payload: string;
} | {
  type: "rejected", payload: Error;
}