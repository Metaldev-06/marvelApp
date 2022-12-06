import { Component, OnInit } from '@angular/core';
import { Result } from '../../interfaces/personajes.interface';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes!: Result[]
  totalRecords!: number;

  constructor( private personajesService: PersonajesService ) {}

  ngOnInit(): void {
    this.personajesService.getPersonajes().subscribe( resp => {
      this.totalRecords = (resp.data.total / resp.data.limit)
      this.personajes = resp.data.results
    })
  }

  onPageChange(event: any) {
    this.personajesService.getPersonajes(event.page * 20, 20).subscribe(resp => {
       this.personajes = resp.data.results;
     })
 }
 

}
