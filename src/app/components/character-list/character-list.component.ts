import { Component, Input, OnInit } from '@angular/core';
import { RickMortyService } from '../../services/rick-morty.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  @Input() searchTerm: string = '';
  characters: any[] = [];
  filteredCharacters: any[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.rickMortyService.getCharacters().subscribe(data => {
        this.characters = data.results;
        this.filteredCharacters = this.characters;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnChanges(): void {
    this.filterCharacters(this.searchTerm);
  }

  filterCharacters(term: string): void {
    this.filteredCharacters = this.characters.filter(character =>
      character.name.toLowerCase().includes(term.toLowerCase())
    );
  }
}
