
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
  setCities: (value: City[]) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  currentCity: City | undefined;
  getCity: (id: string) => void;
  createCity: (city: City) => void;
  deleteCity: (id: string) => void;
} | null;

declare type Country = {
  country: string;
  emoji: string;
}