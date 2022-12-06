import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ResultComic } from 'src/app/personajes/interfaces/comics.interface';
import { PersonajesService } from 'src/app/personajes/services/personajes.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit{
  comics!: ResultComic

  constructor(
    private personajesService: PersonajesService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id}) => this.personajesService.getComicById(id)),
    ).subscribe(resp => {
      this.comics = resp.data.results[0];
    })
      
  }
}
