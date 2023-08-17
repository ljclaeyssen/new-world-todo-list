import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EliteRunsRoutingModule } from './elite-runs-routing.module';
import { EliteRunsComponent } from './elite-runs.component';
import { SingleRunComponent } from './single-run/single-run.component';


@NgModule({
  declarations: [
    EliteRunsComponent,
    SingleRunComponent
  ],
  imports: [
    CommonModule,
    EliteRunsRoutingModule
  ]
})
export class EliteRunsModule { }
