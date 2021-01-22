import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{path: 'page1', loadChildren: () => import('./pages/page1/page1.module').then(m => m.Page1Module)},
  {path: 'page2', loadChildren: () => import('./pages/page2/page2.module').then(m => m.Page2Module)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
