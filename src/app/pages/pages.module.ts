import { NgModule } from '@angular/core';

// Rutas
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';





@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
