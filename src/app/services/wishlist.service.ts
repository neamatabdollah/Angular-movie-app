import { computed, Injectable, signal } from '@angular/core';
import { IMovie } from '../interfaces/_movie';
import { ITvShow } from '../interfaces/_tvshow';

export interface WishlistItem {
  id: number;
  type: 'movie' | 'tv';
  data: IMovie | ITvShow;
  addedAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private wishlistItems = signal<WishlistItem[]>([]);

  // Computed signals
  public wishlist = computed(() => this.wishlistItems());
  public wishlistCount = computed(() => this.wishlistItems().length);
  public movieWishlist = computed(() =>
    this.wishlistItems().filter((item) => item.type === 'movie')
  );
  public tvWishlist = computed(() =>
    this.wishlistItems().filter((item) => item.type === 'tv')
  );

  constructor() {
    this.loadWishlist();
  }

  private loadWishlist(): void {
    const saved = localStorage.getItem('movieWishlist');
    if (saved) {
      try {
        const items = JSON.parse(saved);
        this.wishlistItems.set(
          items.map((item: any) => ({
            ...item,
            addedAt: new Date(item.addedAt),
          }))
        );
      } catch (error) {
        console.error('Error loading wishlist:', error);
      }
    }
  }

  private saveWishlist(): void {
    localStorage.setItem('movieWishlist', JSON.stringify(this.wishlistItems()));
  }

  addToWishlist(item: IMovie | ITvShow, type: 'movie' | 'tv'): boolean {
    const exists = this.wishlistItems().find(
      (w) => w.id === item.id && w.type === type
    );
    if (!exists) {
      const newItem: WishlistItem = {
        id: item.id,
        type,
        data: item,
        addedAt: new Date(),
      };
      this.wishlistItems.update((items) => [...items, newItem]);
      this.saveWishlist();
      return true;
    }
    return false;
  }

  removeFromWishlist(id: number, type: 'movie' | 'tv'): boolean {
    const initialLength = this.wishlistItems().length;
    this.wishlistItems.update((items) =>
      items.filter((item) => !(item.id === id && item.type === type))
    );

    if (this.wishlistItems().length < initialLength) {
      this.saveWishlist();
      return true;
    }
    return false;
  }

  isInWishlist(id: number, type: 'movie' | 'tv'): boolean {
    return this.wishlistItems().some(
      (item) => item.id === id && item.type === type
    );
  }

  clearWishlist(): void {
    this.wishlistItems.set([]);
    this.saveWishlist();
  }

  getWishlistItem(id: number, type: 'movie' | 'tv'): WishlistItem | undefined {
    return this.wishlistItems().find(
      (item) => item.id === id && item.type === type
    );
  }
}
