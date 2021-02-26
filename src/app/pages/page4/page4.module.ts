import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page4RoutingModule } from './page4-routing.module';
import { Page4Component } from './page4.component';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzIconModule} from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [Page4Component],
  imports: [
    CommonModule,
    Page4RoutingModule,
    NzMenuModule,
    NzIconModule
  ]
})
export class Page4Module { }
