import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page3RoutingModule } from './page3-routing.module';
import { Page3Component } from './page3.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [Page3Component],
    exports: [
        Page3Component
    ],
  imports: [
    CommonModule,
    Page3RoutingModule,
    MatButtonModule
  ]
})
export class Page3Module { }
