import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { LanguagesService } from '../../services/languages.service';
import { WishlistService } from '../../services/wishlist.service';
import { MessageService } from 'primeng/api';
import { ITvShow } from '../../interfaces/_tvshow';
import { IReview } from '../../interfaces/_review';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';
@Component({
  selector: 'app-tv-details',
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    BadgeModule,
    DividerModule,
    RatingModule,
    FormsModule,
    ChipModule,
  ],
  templateUrl: './tv-details.component.html',
  styleUrl: './tv-details.component.scss',
})
export class TvDetailsComponent {
  readonly route = inject(ActivatedRoute);
  readonly movieService = inject(MovieService);
  readonly languageService = inject(LanguagesService);
  readonly wishlistService = inject(WishlistService);
  readonly messageService = inject(MessageService);
  readonly router = inject(Router);
  tvShow!: ITvShow;
  recommendations: ITvShow[] = [];
  reviews: IReview[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id') || '0');
      if (id) {
        const lang = this.languageService.language().code;

        this.movieService.getTvShowDetails(id, lang).subscribe({
          next: (res) => (this.tvShow = res),
          error: (err) => console.error(err),
        });
      }
    });
  }

  getImageUrl(path?: string) {
    return this.movieService.getImageUrl(path ?? '');
  }

  isInWishlist() {
    return this.wishlistService.isInWishlist(this.tvShow.id, 'tv');
  }

  toggleWishlist() {
    if (this.isInWishlist()) {
      this.wishlistService.removeFromWishlist(this.tvShow.id, 'tv');
      this.messageService.add({
        severity: 'info',
        summary: 'Removed',
        detail: `${this.tvShow.name} removed from wishlist`,
        life: 3000,
      });
    } else {
      this.wishlistService.addToWishlist(this.tvShow, 'tv');
      this.messageService.add({
        severity: 'success',
        summary: 'Added',
        detail: `${this.tvShow.name} added to wishlist`,
        life: 3000,
      });
    }
  }

  navigateToDetails(id: number) {
    this.router.navigate(['/tv', id]);
  }

  getRatingStars(): number {
    const tvVote = this.tvShow;
    if (!tvVote) return 0;
    return Math.round(tvVote.vote_average / 2);
  }
}
