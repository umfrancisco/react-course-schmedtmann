declare type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

declare type Watched = Movie & {
  runtime: number;
  imdbRating: number;
  userRating: number;
};
