import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule, ButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  query: string = '';

  @Output() search = new EventEmitter<string>();

  // Emit when typing
  onKeyUp(event: KeyboardEvent) {
    this.search.emit(this.query.trim());
  }

  // Emit when clicking the button
  onSearch() {
    if (this.query.trim().length > 0) {
      this.search.emit(this.query);
    }
  }
}
