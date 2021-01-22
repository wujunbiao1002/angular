import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Page1Component} from './page1.component';

const routes: Routes = [{path: '', component: Page1Component},
  {path: 'page3', loadChildren: () => import('./page3/page3.module').then(m => m.Page3Module)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page1RoutingModule {
}
