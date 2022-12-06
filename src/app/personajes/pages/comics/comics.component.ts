import { Component, OnInit } from '@angular/core';
import { ResultComic } from '../../interfaces/comics.interface';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics!: ResultComic[];
  totalRecords!: number;

  constructor( private personajesService: PersonajesService ) {}

  ngOnInit(): void {
    this.personajesService.getComics().subscribe( resp => {
      this.totalRecords = (resp.data.total / resp.data.limit)
      this.comics = resp.data.results;
    })

  }

  onPageChange(event: any) {
     this.personajesService.getComics(event.page * 20, 20).subscribe(resp => {
        this.comics = resp.data.results;
      })
  }
  

}
