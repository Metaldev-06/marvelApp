import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { CardComponent } from './components/card/card.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PersonajeComponent } from './pages/individual/personaje/personaje.component';
import { ComicComponent } from './pages/individual/comic/comic.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';
import { PersonajePipe } from './pipes/personaje.pipe';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { SeriesComponent } from './pages/series/series.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { EventoComponent } from './pages/individual/evento/evento.component';
import { SerieComponent } from './pages/individual/serie/serie.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';



@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    HomeComponent,
    ImagenPipe,
    CardComponent,
    SeparatorComponent,
    BuscarComponent,
    PersonajeComponent,
    ComicComponent,
    FilterComponent,
    PersonajePipe,
    PaginatorComponent,
    ComicsComponent,
    PersonajesComponent,
    SeriesComponent,
    EventosComponent,
    EventoComponent,
    SerieComponent,
    PageErrorComponent,
  ],
  exports: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    PersonajesRoutingModule,
    FormsModule
    
  ]
})
export class PersonajesModule { }
