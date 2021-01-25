import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Page2Component} from './page2.component';

const routes: Routes = [{path: '', component: Page2Component},
  {path: 'page3', loadChildren: () => import('../page2/page3/page3.module').then(m => m.Page3Module)}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page2RoutingModule {
}
