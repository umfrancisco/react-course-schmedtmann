
declare type City = {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  }
  id: string;
}

declare type CityContextAPI = {
  cities: City[];
  setCities: (value: City[]) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

declare type Country = {
  country: string;
  emoji: string;
}