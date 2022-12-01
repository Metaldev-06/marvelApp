import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BuscarComponent } from './pages/buscar/buscar.component';
import { PersonajeComponent } from './pages/individual/personaje/personaje.component';
import { ComicComponent } from './pages/individual/comic/comic.component';
import { HomeComponent } from './pages/home/home.component';
import { SerieComponent } from './pages/individual/serie/serie.component';
import { EventoComponent } from './pages/individual/evento/evento.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { SeriesComponent } from './pages/series/series.component';
import { EventosComponent } from './pages/eventos/eventos.component';

const routes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'buscar',
      component: BuscarComponent
    },
    {
      path: 'personaje/:id',
      component: PersonajeComponent
    },
    {
      path: 'comic/:id',
      component: ComicComponent
    },
    {
      path: 'serie/:id',
      component: SerieComponent
    },
    {
      path: 'evento/:id',
      component: EventoComponent
    },
    {
      path: 'personajes',
      component: PersonajesComponent
    },
    {
      path: 'comics',
      component: ComicsComponent
    },
    {
      path: 'series',
      component: SeriesComponent
    },
    {
      path: 'eventos',
      component: EventosComponent
    }
  ]
}

]

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PersonajesRoutingModule { }
