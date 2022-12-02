import { Component } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Result } from '../../interfaces/personajes.interface';
import { ResultComic } from '../../interfaces/comics.interface';
import { ResultEventos } from '../../interfaces/eventos.interface';
import { ResultSeries } from '../../interfaces/series.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  termino: string = '';

  personajes!: Result[];
  comics!: ResultComic[];
  eventos!: ResultEventos[];
  series!: ResultSeries[];

  totalRecords!: number;

  paymentOptions: any[] = [];
  value!: number;

  constructor(
    private personajesService: PersonajesService
  ) {
    this.paymentOptions = [
      {name: 'Personajes', value: 1},
      {name: 'Comics', value: 2},
      {name: 'Eventos', value: 3},
      {name: 'Series', value: 4}
  ];
  }


  opction() {
    switch (this.value) {

      case 1:
        this.buscarPersonajes() 
        break;
      
      case 2:
        this.buscarComics() 
        break;

      case 3:
        this.buscarEventos();
        break;

      case 4:
        this.buscarSeries();
        break;

      default:
        this.buscarPersonajes() 
        break;

    }
  }

  
  onPageChange(event: any) {
    switch (this.value) {

      case 1:
        this.personajesService.buscarPersonaje(this.termino, event.page * 20).subscribe(resp => {
          this.personajes = resp.data.results;
        })
        break;
      
      case 2:
        this.personajesService.buscarComics(this.termino, event.page * 20).subscribe(resp => {
          this.comics = resp.data.results;
        })
        break;

      case 3:
        this.personajesService.buscarEventos(this.termino, event.page * 20).subscribe(resp => {
          this.eventos = resp.data.results;
        })
        break;

      case 4:
        this.personajesService.buscarSeries(this.termino, event.page * 20).subscribe(resp => {
          this.series = resp.data.results;
        })
        break;

      default:
        this.personajesService.buscarPersonaje(this.termino, event.page * 20).subscribe(resp => {
          this.personajes = resp.data.results;
        })
        break;

    }
    
  } 
  
  

  buscarPersonajes() {
    this.personajesService.buscarPersonaje(this.termino).subscribe(resp => {
      this.totalRecords = (resp.data.total / resp.data.limit)
      this.personajes = resp.data.results;
      this.comics = [];
      this.eventos = [];
      this.series = [];
    })
  }

  buscarComics() {
    this.personajesService.buscarComics(this.termino).subscribe(resp => {
      this.totalRecords = (resp.data.total / resp.data.limit)
      this.comics = resp.data.results;
      this.personajes = [];
      this.eventos = [];
      this.series = [];
    })
  }
  buscarEventos() {
    this.personajesService.buscarEventos(this.termino).subscribe(resp => {
      this.totalRecords = (resp.data.total / resp.data.limit)
      this.eventos = resp.data.results;
      this.personajes = [];
      this.comics = [];
      this.series = [];
    })
  }
  buscarSeries() {
    this.personajesService.buscarSeries(this.termino).subscribe(resp => {
      this.totalRecords = (resp.data.total / resp.data.limit)
      this.series = resp.data.results;
      this.personajes = [];
      this.comics = [];
      this.eventos = [];
    })
  }
}