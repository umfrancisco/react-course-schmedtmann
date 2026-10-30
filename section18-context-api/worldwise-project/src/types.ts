
export type City = {
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

export type Position = {
  lat: number;
  lng: number;
}

export type CityContextType = {
  cities: City[];
  isLoading: boolean;
  currentCity: City | undefined;
  getCity: (id: string) => void;
  createCity: (city: City) => void;
  deleteCity: (id: string) => void;
}

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export type Country = {
  country: string;
  emoji: string;
}

export type User = {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export type CityState = {
  cities: City[];
  isLoading: boolean;
  currentCity: City | undefined;
  error: Error | null;
}

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
}

export type CityPayloadAction = 
| { type: "loading"; } 
| { type: "cities/loaded", payload: City[]; } 
| { type: "city/loaded", payload: City; } 
| { type: "city/created", payload: City; } 
| { type: "city/deleted", payload: string; } 
| { type: "rejected", payload: Error; }

export type AuthPayloadAction = 
| { type: "login", payload: User; } 
| { type: "logout"; }