import { IGenre } from './_genre';

export interface ITvShow {
  id: number;
  title: string;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  genres?: IGenre[];
  number_of_seasons?: number;
  number_of_episodes?: number;
  tagline?: string;
}
