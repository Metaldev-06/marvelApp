import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PersonajesService } from 'src/app/personajes/services/personajes.service';
import { ResultEventos } from '../../../interfaces/eventos.interface';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  eventos!: ResultEventos

  constructor(
    private personajesService: PersonajesService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id}) => this.personajesService.getEventosById(id)),
    ).subscribe(resp => {
      this.eventos = resp.data.results[0];
    })
      
  }
}
