
declare type Movie = {
  imdbID: string
  title: string
  year: string
  poster: string
}

declare type Watched = Movie & {
  runtime: number
  imdbRating: number
  userRating: number
}