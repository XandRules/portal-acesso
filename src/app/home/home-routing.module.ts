import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuardsGuard } from '../guards/auth-guards.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuardsGuard], data: { acesso: 'USER'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
