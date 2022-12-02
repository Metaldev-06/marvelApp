import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personajes, Result } from '../interfaces/personajes.interface';
import { Comics } from '../interfaces/comics.interface';
import { Series } from '../interfaces/series.interface';
import { Eventos } from '../interfaces/eventos.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  url: string ="https://gateway.marvel.com:443";
  apiKey: string = "ts=1&apikey=e52291f500fea566deb2e98cf3d6f4f3&hash=f154b464381aa348b172f922dbd97804";

  constructor(
    private http: HttpClient
  ) { }


  //TODO:Buscar personajes ===========================================================================================================
  getPersonajes(offset: number = 0,limit: number = 20): Observable<Personajes> {
    return this.http.get<Personajes>(`${this.url}/v1/public/characters?limit=${limit}&offset=${offset}&${this.apiKey}`);
  }

  buscarPersonaje(termino: string, offset: number = 0): Observable<Personajes> {
    return this.http.get<Personajes>(`${this.url}/v1/public/characters?nameStartsWith=${termino}&offset=${offset}&${this.apiKey}`)
  }

  getPersonajeByID(id :string): Observable<Personajes> {
    return this.http.get<Personajes>(`${this.url}/v1/public/characters/${id}?${this.apiKey}`)
  }

  //TODO: Buscar comics ===========================================================================================================
  getComics( offset: number = 0,limit: number = 20): Observable<Comics> {
    return this.http.get<Comics>(`${this.url}/v1/public/comics?limit=${limit}&offset=${offset}&${this.apiKey}`)
  }

  buscarComics(termino: string, offset: number = 0): Observable<Comics> {
    return this.http.get<Comics>(`${this.url}/v1/public/comics?titleStartsWith=${termino}&offset=${offset}&${this.apiKey}`)
  }

  getComicsById(id: string): Observable<Comics> {
    return this.http.get<Comics>(`${this.url}/v1/public/characters/${id}/comics?limit=5?${this.apiKey}`)
  }

  //TODO:Buscar Series ===========================================================================================================
  getSeriesById(id: string): Observable<Series> {
    return this.http.get<Series>(`${this.url}/v1/public/characters/${id}/series?limit=5?${this.apiKey}`)
  }

  buscarSeries(termino: string, offset: number = 0): Observable<Series> {
    return this.http.get<Series>(`${this.url}/v1/public/series?titleStartsWith=${termino}&offset=${offset}&${this.apiKey}`)
  }
  //TODO:Buscar Eventos ===========================================================================================================
  getEventos(): Observable<Personajes> {
    return this.http.get<Personajes>(`${this.url}/v1/public/events?${this.apiKey}`)
  }

  buscarEventos(termino: string, offset: number = 0): Observable<Eventos> {
    return this.http.get<Eventos>(`${this.url}/v1/public/events?nameStartsWith=${termino}&offset=${offset}&${this.apiKey}`)
  }
  

 
  
}
