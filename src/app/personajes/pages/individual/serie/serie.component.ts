import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ResultSeries } from 'src/app/personajes/interfaces/series.interface';
import { PersonajesService } from 'src/app/personajes/services/personajes.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit{


  series!: ResultSeries

  constructor(
    private personajesService: PersonajesService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id}) => this.personajesService.getSerieById(id)),
    ).subscribe(resp => {
      this.series = resp.data.results[0];
    })
      
  }
}
