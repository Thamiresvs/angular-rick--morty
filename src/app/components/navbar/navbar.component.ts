import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchTerm: string = '';
  @Output() searchTermChanged = new EventEmitter<string>();

  onSearchChange(term: string): void {
    this.searchTermChanged.emit(term);
  }
}
