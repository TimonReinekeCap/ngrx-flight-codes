import { NgModule } from '@angular/core';
import { FlightsComponent } from './components/flights/flights.component';
import { RouterModule, Routes } from '@angular/router';

const flightsRoutes: Routes = [
  {
    path: '',
    component: FlightsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(flightsRoutes)],
  exports: [RouterModule],
})
export class FlightsRoutingModule {}
