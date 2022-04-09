import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Design1Component } from './components/design1/design1.component';
import { Design2Component } from './components/design2/design2.component';
import { Design3Component } from './components/design3/design3.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'design1',
    pathMatch: 'full'
  },
  {
    path: 'design1',
    component: Design1Component
  },
  {
    path: 'design2',
    component: Design2Component
  },
  {
    path: 'design3',
    component: Design3Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
