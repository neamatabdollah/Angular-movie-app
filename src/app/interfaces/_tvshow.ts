import { IGenre } from './_genre';
export interface ITvShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  homepage:string;
  spoken_languages?:{
    english_name:string;
    iso_639_1:string;
    name:string;
  }[];
  seasons?: {
    id: number;
    overview: string;
    episode_count?: number;
    name?: string;
    air_date?: string;
    season_number?: number;
    vote_average?: number;
  }[];
  languuages?: string[];
  last_air_date?: string;
  genres?: IGenre[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  tagline?: string;
  production_companies?: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  networks?:{
    id: number;
    logo_path: string;
    name: string;
    origin_country:string;
  }[];
}
