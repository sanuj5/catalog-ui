import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: '',
    component: ApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
