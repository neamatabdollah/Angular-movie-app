import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { IMovie } from '../../interfaces/_movie';
import { PaginatorModule } from 'primeng/paginator';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { LanguagesService } from '../../services/languages.service';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies-list',
  imports: [CommonModule, MovieCardComponent, PaginatorModule, SearchComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent {
  movies: IMovie[] = [];
  totalResults = 0;
  currentPage = 1;
  searchResults: IMovie[] = [];
  searchQuery: string = '';

  constructor(
    private movieService: MovieService,
    private router: Router,
    private language: LanguagesService
  ) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    const lang = this.language.language().code;
    this.movieService.getNowPlayingMovies(this.currentPage, lang).subscribe({
      next: (res) => {
        this.movies = res.results;
        this.totalResults = res.total_results;
      },
      error: (err) => console.error(err),
    });
  }

  onPageChange(event: any) {
    this.currentPage = event.page + 1;
    this.getMovies();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToDetails(movieId: number) {
    this.router.navigate(['/movie', movieId]);
  }

  handleSearch(query: string) {
    this.searchQuery = query.trim();
    if (this.searchQuery.length === 0) {
      this.searchResults = [];
      this.getMovies();
      return;
    }

    const lang = this.language.language().code;
    this.movieService.searchMovies(this.searchQuery, this.currentPage, lang).subscribe((res) => {
      this.searchResults = res.results;
    });
  }
}
