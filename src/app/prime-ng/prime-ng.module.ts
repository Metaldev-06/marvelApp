import { NgModule } from '@angular/core';

import {CardModule} from 'primeng/card';
import {GalleriaModule} from 'primeng/galleria';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import {AutoFocusModule} from 'primeng/autofocus';
import {SkeletonModule} from 'primeng/skeleton';
import {RippleModule} from 'primeng/ripple';

import {TabMenuModule} from 'primeng/tabmenu';




@NgModule({
  exports: [
    CardModule,
    GalleriaModule,
    MegaMenuModule,
    MenubarModule,
    InputTextModule,
    SelectButtonModule,
    ButtonModule,
    PaginatorModule,
    AutoFocusModule,
    SkeletonModule,
    TabMenuModule,
    RippleModule
  ]
})
export class PrimeNgModule { }
