import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/personajes.interface';
import { PersonajesService } from '../../services/personajes.service';
import { ResultComic } from '../../interfaces/comics.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personajes: Result[] = [];
  comics: ResultComic[] = []

  color: string = "title"

  constructor(
    private personajesService: PersonajesService
  ) {}

  ngOnInit(): void {


    if (sessionStorage.getItem('personajes') === null) {
      this.personajesService.getPersonajes(0, 6).subscribe(resp => {
        this.personajes = resp.data.results;
        sessionStorage.setItem('personajes', JSON.stringify(resp.data.results));
      })
    } else {
      this.personajes = JSON.parse(sessionStorage.getItem('personajes') || '{}');
    }
    
    if (sessionStorage.getItem('comics') === null) {
      this.personajesService.getComics(0, 6).subscribe(resp => {
        this.comics = resp.data.results;
        sessionStorage.setItem('comics', JSON.stringify(resp.data.results));
      })
    } else {
      this.comics = JSON.parse(sessionStorage.getItem('comics') || '{}');
    }
  }


}
