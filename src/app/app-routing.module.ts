import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // Rota publica
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
