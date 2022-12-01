import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  paymentOptions: any[] = [];
  value!: number;

  constructor() {

    this.paymentOptions = [
        {name: 'Personajes', value: 1},
        {name: 'Comics', value: 2},
        {name: 'Eventos', value: 3},
        {name: 'Series', value: 4}
    ];
  }

}
