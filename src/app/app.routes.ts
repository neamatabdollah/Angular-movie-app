import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/movies-list/movies-list.component').then(
        (m) => m.MoviesListComponent
      ),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./components/movie-details/movie-details.component').then(
        (m) => m.MovieDetailsComponent
      ),
  },
  {
    path: 'tv-shows',
    loadComponent: () =>
      import('./components/tv-shows/tv-shows.component').then(
        (m) => m.TvShowsComponent
      ),
  },
  {
    path: 'tv/:id',
    loadComponent: () =>
      import('./components/tv-details/tv-details.component').then(
        (m) => m.TvDetailsComponent
      ),
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./components/wishlist/wishlist.component').then(
        (m) => m.WishlistComponent
      ),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./components/search/search.component').then(
        (m) => m.SearchComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
