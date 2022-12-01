import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './personajes/pages/home/home.component';
import { PageErrorComponent } from './personajes/pages/page-error/page-error.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, 
  },
  {
    path: '',
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'personaje/:id',
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path: 'comic/:id',
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path: 'serie/:id',
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path: 'evento/:id',
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path: 'personajes',
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path: 'comics',
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path: 'series',
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path: 'error',
    component: PageErrorComponent
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
