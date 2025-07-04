import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { SelectModule } from 'primeng/select';

import { WishlistService } from '../../services/wishlist.service';
import { LanguagesService, Language } from '../../services/languages.service';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SelectModule,
    DropdownModule,
    BadgeModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  searchQuery = signal('');
  // languages: Language[] = [];
  mobileMenuOpen = signal(false);

  private readonly router = inject(Router);
  readonly wishlistService = inject(WishlistService);
  readonly languageService = inject(LanguagesService);

  readonly languages: Language[] = this.languageService.getLanguages();

  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }

  onSearch(): void {
    const query = this.searchQuery().trim();
    if (query) {
      this.router.navigate(['/search'], { queryParams: { q: query } });
      this.searchQuery.set('');
    }
  }

  onLanguageChange(language: Language): void {
    this.languageService.setLanguage(language);
    // Reload current page with new language
    window.location.reload();
  }

  navigateToWishlist(): void {
    this.router.navigate(['/wishlist']);
  }

  onSearchKeyup(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }

  navigateHome(): void {
    this.router.navigate(['/home']);
  }
}
