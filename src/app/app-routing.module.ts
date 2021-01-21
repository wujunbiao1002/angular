import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserModule} from './pages/user/user.module';

const routes: Routes = [{
  path: '',
  component: UserModule
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
