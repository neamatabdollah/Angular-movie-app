import { IGenre } from './_genre';

export interface IProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
export interface IMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  genres?: IGenre[];
  runtime?: number;
  tagline?: string;
  homepage?: string;
  production_companies: IProductionCompany[];
}
