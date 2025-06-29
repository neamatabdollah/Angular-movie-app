import { Component, signal } from '@angular/core';
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
    BadgeModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  searchQuery = signal('');
  languages: Language[] = [];

  constructor(
    private router: Router,
    public wishlistService: WishlistService,
    public languageService: LanguagesService
  ) {
    this.languages = this.languageService.getLanguages();
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
}
