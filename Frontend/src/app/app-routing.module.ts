import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ViewPromotionsComponent } from './pages/view-promotions/view-promotions.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'view', component:ViewPromotionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
