import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstFilterComponent } from './pages/first-filter/first-filter.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewPromotionsComponent } from './pages/view-promotions/view-promotions.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'view', component:ViewPromotionsComponent},
  {path: 'firstFilter', component:FirstFilterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
