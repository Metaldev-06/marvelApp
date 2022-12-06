import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Result } from '../../interfaces/personajes.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{

  images!: any;

  constructor(
    private personajesServices: PersonajesService
  ) { }


  ngOnInit(): void {
    // this.personajesServices.getEventos().subscribe(images => {
    //   this.images = images.data.results
    //   console.log(images.data.results);
    // });

    this.personajesServices.getHeroImage().subscribe(images => {
      this.images = images.data
    })

    
  }

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    }
  ]

}
