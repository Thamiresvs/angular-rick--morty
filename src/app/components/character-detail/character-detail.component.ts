import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character: any;

  constructor(
    private rickMortyService: RickMortyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.rickMortyService.getCharacterById(id).subscribe(data => {
        this.character = data;
      });
    } else {
      console.error('ID do personagem não encontrado');
    }
  }
}
