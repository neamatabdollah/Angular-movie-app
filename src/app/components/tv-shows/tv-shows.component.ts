import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TvCardComponent } from '../tv-card/tv-card.component';
import { PaginatorModule } from 'primeng/paginator';
import { ITvShow } from '../../interfaces/_tvshow';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-tv-shows',
  imports: [CommonModule, TvCardComponent, PaginatorModule],
  templateUrl: './tv-shows.component.html',
  styleUrl: './tv-shows.component.scss',
})
export class TvShowsComponent {
  readonly movieService = inject(MovieService);
  readonly router = inject(Router);

  tvShows: ITvShow[] = [];
  totalResults = 0;
  currentPage = 1;

  ngOnInit() {
    this.getTvShows();
  }

  getTvShows() {
    this.movieService.getPopularTvShows(this.currentPage).subscribe({
      next: (res) => {
        this.tvShows = res.results;
        this.totalResults = res.total_results;
      },
      error: (err) => console.error(err),
    });
  }

  onPageChange(event: any) {
    this.currentPage = event.page + 1;
    this.getTvShows();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToDetails(tvId: number) {
    this.router.navigate(['/tv', tvId]);
  }
}
