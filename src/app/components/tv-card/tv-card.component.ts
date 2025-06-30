import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITvShow } from '../../interfaces/_tvshow';
import { MovieService } from '../../services/movie.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { WishlistService } from '../../services/wishlist.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tv-card',
  imports: [CommonModule, CardModule,ButtonModule, BadgeModule],
  templateUrl: './tv-card.component.html',
  styleUrl: './tv-card.component.scss',
})
export class TvCardComponent {
  @Input() tvShow!: ITvShow;
  @Output() cardClick = new EventEmitter<void>();

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

    const exists = this.wishlistService.isInWishlist(this.tvShow.id, 'tv');

    if (exists) {
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

  onCardClick() {
    this.cardClick.emit();
  }
}
