import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Result } from '../../interfaces/personajes.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{

  images: Result[] = [];

  constructor(
    private personajesServices: PersonajesService
  ) { }


  ngOnInit(): void {
    this.personajesServices.getEventos().subscribe(images => this.images = images.data.results);
  }

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    }
  ]

}
