import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodesComponent } from './components/codes/codes.component';

const codesRoutes: Routes = [
  {
    path: '',
    component: CodesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(codesRoutes)],
  exports: [RouterModule],
})
export class CodesRoutingModule {}
