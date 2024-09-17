import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-rick-morty';
  searchTerm: string = '';

  // onSearchTermChanged(term: string): void {
  //   this.searchTerm = term;
  // }
}
