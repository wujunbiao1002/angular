import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';


@NgModule({
  declarations: [HomeComponent, View1Component, View2Component],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
