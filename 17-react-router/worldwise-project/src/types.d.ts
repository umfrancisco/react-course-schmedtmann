
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

declare type Country = {
  country: string;
  emoji: string;
}