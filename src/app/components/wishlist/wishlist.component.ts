import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistItem, WishlistService } from '../../services/wishlist.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { TvCardComponent } from '../tv-card/tv-card.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IMovie } from '../../interfaces/_movie';
import { ITvShow } from '../../interfaces/_tvshow';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  imports: [
    CommonModule,
    MovieCardComponent,
    TvCardComponent,
    ButtonModule,
    ConfirmDialogModule,
  ],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class WishlistComponent {
  readonly wishlistService = inject(WishlistService);
  readonly confirmationService = inject(ConfirmationService);
  readonly messageService = inject(MessageService);
  readonly router = inject(Router);

  clearWishlist() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to clear your wishlist?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.wishlistService.clearWishlist();
        this.messageService.add({
          severity: 'success',
          summary: 'Cleared',
          detail: 'Your wishlist has been cleared.',
        });
      },
    });
  }

  navigateHome(): void {
    this.router.navigate(['/home']);
  }

  navigateToMovieDetails(id: number) {
    this.router.navigate(['/movie', id]);
  }

  navigateToTvDetails(tvId: number) {
    this.router.navigate(['/tv', tvId]);
  }

  getTvShowData(item: WishlistItem): ITvShow {
    return item.data as ITvShow;
  }
}
