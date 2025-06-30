import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/_movie';
import { ITvShow } from '../interfaces/_tvshow';
import { ApiResponse } from '../interfaces/_api-response';
import { IReview } from '../interfaces/_review';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = '501610b3365954e60383a769e48bae01';
  private baseUrl = 'https://api.themoviedb.org/3';
  private imageBaseUrl = 'https://image.tmdb.org/t/p/';

  constructor(private http: HttpClient) {}

  // Movie APIs
  getNowPlayingMovies(
    page: number = 1,
    language: string = 'en'
  ): Observable<ApiResponse<IMovie>> {
    return this.http.get<ApiResponse<IMovie>>(
      `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${language}`
    );
  }

  getMovieDetails(id: number, language: string = 'en'): Observable<IMovie> {
    return this.http.get<IMovie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=${language}`
    );
  }

  getMovieRecommendations(
    id: number,
    language: string = 'en'
  ): Observable<ApiResponse<IMovie>> {
    return this.http.get<ApiResponse<IMovie>>(
      `${this.baseUrl}/movie/${id}/recommendations?api_key=${this.apiKey}&language=${language}`
    );
  }

  getMovieReviews(id: number): Observable<ApiResponse<IReview>> {
    return this.http.get<ApiResponse<IReview>>(
      `${this.baseUrl}/movie/${id}/reviews?api_key=${this.apiKey}`
    );
  }

  searchMovies(
    query: string,
    page: number = 1,
    language: string = 'en'
  ): Observable<ApiResponse<IMovie>> {
    return this.http.get<ApiResponse<IMovie>>(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}&page=${page}&language=${language}`
    );
  }

  // TV Show APIs
  getPopularTvShows(
    page: number = 1,
    language: string = 'en'
  ): Observable<ApiResponse<ITvShow>> {
    return this.http.get<ApiResponse<ITvShow>>(
      `${this.baseUrl}/tv/popular?api_key=${this.apiKey}&page=${page}&language=${language}`
    );
  }

  getTvShowDetails(id: number, language: string = 'en'): Observable<ITvShow> {
    return this.http.get<ITvShow>(
      `${this.baseUrl}/tv/${id}?api_key=${this.apiKey}&language=${language}`
    );
  }

  getTvShowRecommendations(
    id: number,
    language: string = 'en'
  ): Observable<ApiResponse<ITvShow>> {
    return this.http.get<ApiResponse<ITvShow>>(
      `${this.baseUrl}/tv/${id}/recommendations?api_key=${this.apiKey}&language=${language}`
    );
  }

  searchTvShows(
    query: string,
    page: number = 1,
    language: string = 'en'
  ): Observable<ApiResponse<ITvShow>> {
    return this.http.get<ApiResponse<ITvShow>>(
      `${this.baseUrl}/search/tv?api_key=${this.apiKey}&query=${query}&page=${page}&language=${language}`
    );
  }


  // imageBaseUrl = 'https://image.tmdb.org/t/p/'
  // Utility methods
  getImageUrl(path: string, size: string = 'w500'): string {
    return path
      ? `${this.imageBaseUrl}${size}${path}`
      : 'assets/no-image.jpg';
  }

  getBackdropUrl(path: string): string {
    return path
      ? `${this.imageBaseUrl}w1280${path}`
      : 'assets/no-image.jpg';
  }
}
