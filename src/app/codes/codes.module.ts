import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodesRoutingModule } from './codes.routing.module';
import { CodesComponent } from './components/codes/codes.component';
import { StoreModule } from '@ngrx/store';
import { codesReducer } from './state/codes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CodesEffects } from './state/codes.effects';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { TableComponent } from './components/table/table.component';
import { ErrorComponent } from './components/error/error.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    CodesComponent,
    IndicatorComponent,
    TableComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    CodesRoutingModule,
    MatTableModule,
    MatProgressBarModule,
    StoreModule.forFeature('codes', codesReducer),
    EffectsModule.forFeature([CodesEffects]),
  ],
})
export class CodesModule {}
