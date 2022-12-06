import { Component, OnInit } from '@angular/core';

import {MenuItem, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];
  activeItem!: MenuItem;

  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.items = [
            // {
            //     label: 'Home',
            //     icon: 'pi pi-fw pi-home',
            //     routerLink: ['/']
            // },
            {
                label:'Personajes',
                icon:'pi pi-fw pi-user',
                routerLink: ['/personajes']
            },
            {
                label:'Comics',
                icon:'pi pi-fw pi-file',
                routerLink: ['/comics']
            },
            {
                label:'Series',
                icon:'pi pi-fw pi-camera',
                routerLink: ['/series']
            },
            {
                label:'Eventos',
                icon:'pi pi-fw pi-calendar',
                routerLink: ['/eventos']
            },
        ];
        this.activeItem = this.items[0];
        this.primengConfig.ripple = true;
    }
}
