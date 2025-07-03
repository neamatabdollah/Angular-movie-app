import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  inject,
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

  private readonly movieService = inject(MovieService);
  readonly wishlistService = inject(WishlistService);
  private readonly messageService = inject(MessageService);

  title = computed(() => (this.tvShow as ITvShow).name);
  releaseDate = computed(() => (this.tvShow as ITvShow).first_air_date);
  isInWishlist = computed(() =>
    this.wishlistService.isInWishlist(this.tvShow.id, this.type)
  );

  getImageUrl(path?: string): string {
    return this.movieService.getImageUrl(path ?? '');
  }

  toggleWishlist(event: Event) {
    event.stopPropagation();

    // const exists = this.wishlistService.isInWishlist(this.tvShow.id, this.type);
    console.log(this.tvShow.name);
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
