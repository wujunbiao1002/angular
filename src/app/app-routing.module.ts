import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{path: 'page1', loadChildren: () => import('./pages/page1/page1.module').then(m => m.Page1Module)},
  {path: 'page2', loadChildren: () => import('./pages/page2/page2.module').then(m => m.Page2Module)},
  { path: 'page3', loadChildren: () => import('./pages/page3/page3.module').then(m => m.Page3Module) },
  { path: 'page4', loadChildren: () => import('./pages/page4/page4.module').then(m => m.Page4Module) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
