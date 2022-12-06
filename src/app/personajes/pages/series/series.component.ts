import { Component } from '@angular/core';
import { ResultSeries } from '../../interfaces/series.interface';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  series!: ResultSeries[]
  totalRecords!: number;

  constructor( private personajesService: PersonajesService ) {}

  ngOnInit(): void {
    this.personajesService.getSeries().subscribe( resp => {
      this.totalRecords = (resp.data.total / resp.data.limit)
      this.series = resp.data.results
    })
  }

  onPageChange(event: any) {
    this.personajesService.getSeries(event.page * 20, 20).subscribe(resp => {
       this.series = resp.data.results;
     })
 }
 

}
