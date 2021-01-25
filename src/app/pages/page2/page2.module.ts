import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { Page2Component } from './page2.component';
import {Page3Module} from './page3/page3.module';


@NgModule({
  declarations: [Page2Component],
    imports: [
        CommonModule,
        Page2RoutingModule,
        Page3Module
    ]
})
export class Page2Module { }
