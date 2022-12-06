import { Component, Input } from '@angular/core';

import { Result } from '../../interfaces/personajes.interface';
import { ResultComic } from '../../interfaces/comics.interface';
import { ResultSeries } from '../../interfaces/series.interface';
import { ResultEventos } from '../../interfaces/eventos.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() personaje!: Result
  @Input() comics!: ResultComic
  @Input() series!: ResultSeries
  @Input() eventos!: ResultEventos
  @Input() clase!: string



  nombre() {
    if (this.personaje) {
      return this.personaje.name;
      
    } else if (this.comics) {
      return this.comics.title;
      
    } else if (this.series) {
      return this.series.title;
    } else if (this.eventos) {
      return this.eventos.title;
    }
    return;
  }
  fecha() {
    if (this.personaje) {
      return this.personaje.modified;
      
    } else if (this.comics) {
      return this.comics.modified ;
      
    } else if (this.series) {
      return this.series.modified;

    }else if (this.eventos) {
      return this.eventos.modified;
    }
    return;
  }
  imagen() {
    if (this.personaje) {
      let path = this.personaje.thumbnail.path
      let extension = this.personaje.thumbnail.extension
      return `${path}.${extension}`;
      
    } else if (this.comics) {
      let path = this.comics.thumbnail.path
      let extension = this.comics.thumbnail.extension
      return `${path}.${extension}`;
      
    } else if (this.series) {
      let path = this.series.thumbnail.path
      let extension = this.series.thumbnail.extension
      return `${path}.${extension}`;

    } else if ( this.eventos ) {
      let path = this.eventos.thumbnail.path
      let extension = this.eventos.thumbnail.extension
      return `${path}.${extension}`;
    }
    return;
  }
}
