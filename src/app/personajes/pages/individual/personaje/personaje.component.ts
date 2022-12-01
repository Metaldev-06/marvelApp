import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ResultComic } from '../../../interfaces/comics.interface';
import { Result } from '../../../interfaces/personajes.interface';
import { PersonajesService } from '../../../services/personajes.service';
import { ResultSeries, Series } from '../../../interfaces/series.interface';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit{
  
  personaje!: Result
  comics!: ResultComic[]
  series!: ResultSeries[]

  constructor(
    private personajesService: PersonajesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id}) => this.personajesService.getPersonajeByID(id)),
    ).subscribe(resp => {
      this.personaje = resp.data.results[0];
    })

    this.route.params.pipe(
      switchMap(({id}) => this.personajesService.getComicsById(id)),
    ).subscribe(resp => {
      this.comics = resp.data.results;
    })

    this.route.params.pipe(
      switchMap(({id}) => this.personajesService.getSeriesById(id)),
    ).subscribe(resp => {
      this.series = resp.data.results;

    })
      
  }
}
