import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MovieService } from '../../services/movie.service';
import { WishlistService } from '../../services/wishlist.service';
import { MessageService } from 'primeng/api';
import { IMovie } from '../../interfaces/_movie';
import { ITvShow } from '../../interfaces/_tvshow';

@Component({
  selector: 'app-movie-card',
  imports: [CommonModule, CardModule, ButtonModule, BadgeModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() item!: IMovie | ITvShow;
  @Input() type: 'movie' | 'tv' = 'movie';
  @Output() cardClick = new EventEmitter<void>();

  title = computed(() =>
    this.type === 'movie'
      ? (this.item as IMovie).title
      : (this.item as ITvShow).name
  );

  releaseDate = computed(() =>
    this.type === 'movie'
      ? (this.item as IMovie).release_date
      : (this.item as ITvShow).first_air_date
  );

  isInWishlist = computed(() =>
    this.wishlistService.isInWishlist(this.item.id, this.type)
  );
  constructor(
    private movieService: MovieService,
    private wishlistService: WishlistService,
    private messageService: MessageService,
  ) {}

  getImageUrl(path?: string): string {
    return this.movieService.getImageUrl(path ?? '');
  }

  toggleWishlist(event: Event): void {
    event.stopPropagation();

    if (this.isInWishlist()) {
      const removed = this.wishlistService.removeFromWishlist(
        this.item.id,
        this.type
      );
      if (removed) {
        this.messageService.add({
          severity: 'info',
          summary: 'Removed',
          detail: `${this.title()} removed from wishlist`,
          life: 3000,
        });
      }
    } else {
      const added = this.wishlistService.addToWishlist(this.item, this.type);
      if (added) {
        this.messageService.add({
          severity: 'success',
          summary: 'Added',
          detail: `${this.title()} added to wishlist`,
          life: 3000,
        });
      }
    }
  }

  onCardClick(): void {
    this.cardClick.emit();
  }

  getReleaseYear(): string {
    const date = this.releaseDate();
    return date ? new Date(date).getFullYear().toString() : 'N/A';
  }

  getFormattedDate(): string {
    const date = this.releaseDate();
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }
}
