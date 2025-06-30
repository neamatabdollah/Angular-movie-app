import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { LanguagesService } from '../../services/languages.service';
import { WishlistService } from '../../services/wishlist.service';
import { MessageService } from 'primeng/api';
import { IMovie } from '../../interfaces/_movie';
import { IReview } from '../../interfaces/_review';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    CommonModule,
    MovieCardComponent,
    CardModule,
    ButtonModule,
    BadgeModule,
    DividerModule,
    RatingModule,
    FormsModule,
    ChipModule
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  movie!: IMovie;
  recommendations: IMovie[] = [];
  reviews: IReview[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private languageService: LanguagesService,
    private wishlistService: WishlistService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id') || '0');
      if (id) {
        const lang = this.languageService.language().code;

        this.movieService.getMovieDetails(id, lang).subscribe({
          next: (res) => (this.movie = res),
          error: (err) => console.error(err),
        });

        this.movieService.getMovieRecommendations(id, lang).subscribe({
          next: (res) => {
            // console.log('Movie Details:', res);
            // console.log('Companies:', res.results[0]?.production_companies);
            (this.recommendations = res.results);
          },
          error: (err) => console.error(err),
        });

        this.movieService.getMovieReviews(id).subscribe({
          next: (res) => (this.reviews = res.results),
          error: (err) => console.error(err),
        });
      }
    });
  }

  getImageUrl(path?: string) {
    return this.movieService.getImageUrl(path ?? '');
  }

  isInWishlist() {
    return this.wishlistService.isInWishlist(this.movie.id, 'movie');
  }

  toggleWishlist() {
    if (this.isInWishlist()) {
      this.wishlistService.removeFromWishlist(this.movie.id, 'movie');
      this.messageService.add({
        severity: 'info',
        summary: 'Removed',
        detail: `${this.movie.title} removed from wishlist`,
        life: 3000,
      });
    } else {
      this.wishlistService.addToWishlist(this.movie, 'movie');
      this.messageService.add({
        severity: 'success',
        summary: 'Added',
        detail: `${this.movie.title} added to wishlist`,
        life: 3000,
      });
    }
  }

  navigateToDetails(id: number) {
    this.router.navigate(['/movie', id]);
  }

  getRatingStars(): number {
    const movie = this.movie;
    if (!movie) return 0;
    return Math.round(movie.vote_average / 2);
  }


}
