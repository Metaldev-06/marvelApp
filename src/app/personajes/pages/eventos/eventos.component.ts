import { Component } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { ResultEventos } from '../../interfaces/eventos.interface';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {


  eventos!: ResultEventos[];
  totalRecords!: number;

  color: string = "colorText"

  constructor( private personajesService: PersonajesService ) {}

  ngOnInit(): void {
    this.personajesService.getEventos().subscribe( resp => {
      this.totalRecords = (resp.data.total / resp.data.limit)
      this.eventos = resp.data.results;
    })

  }

  onPageChange(event: any) {
     this.personajesService.getEventos(event.page * 20, 20).subscribe(resp => {
        this.eventos = resp.data.results;
      })
  }
  

}
