import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuardsGuard } from '../guards/auth-guards.guard';

const routes: Routes = [{
  path: '', component: DashboardComponent, canActivate: [authGuardsGuard], data: { acesso: 'ADMIN'}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
