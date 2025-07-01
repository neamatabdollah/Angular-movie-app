import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ITvShow } from '../../interfaces/_tvshow';
import { MovieService } from '../../services/movie.service';
import { ButtonModule } from 'primeng/button';
import { WishlistService } from '../../services/wishlist.service';
import { MessageService } from 'primeng/api';
import { IMovie } from '../../interfaces/_movie';

@Component({
  selector: 'app-tv-card',
  imports: [CommonModule, ButtonModule],
  templateUrl: './tv-card.component.html',
  styleUrl: './tv-card.component.scss',
})
export class TvCardComponent {
  @Input() tvShow!: ITvShow;
  @Input() type: 'movie' | 'tv' = 'tv';
  @Output() cardClick = new EventEmitter<void>();

  title = computed(() => (this.tvShow as ITvShow).name);

  releaseDate = computed(() => (this.tvShow as ITvShow).first_air_date);

  isInWishlist = computed(() =>
    this.wishlistService.isInWishlist(this.tvShow.id, this.type)
  );

  constructor(
    private movieService: MovieService,
    private wishlistService: WishlistService,
    private messageService: MessageService
  ) {}

  getImageUrl(path?: string): string {
    return this.movieService.getImageUrl(path ?? '');
  }

  toggleWishlist(event: Event) {
    event.stopPropagation();

    // const exists = this.wishlistService.isInWishlist(this.tvShow.id, 'tv');

    if (this.isInWishlist()) {
      this.wishlistService.removeFromWishlist(this.tvShow.id, this.type);
      this.messageService.add({
        severity: 'info',
        summary: 'Removed',
        detail: `${this.tvShow.name} removed from wishlist`,
        life: 3000,
      });
    } else {
      this.wishlistService.addToWishlist(this.tvShow, this.type);
      this.messageService.add({
        severity: 'success',
        summary: 'Added',
        detail: `${this.tvShow.name} added to wishlist`,
        life: 3000,
      });
    }
  }

  onCardClick() {
    this.cardClick.emit();
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
