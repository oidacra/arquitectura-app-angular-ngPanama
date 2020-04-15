import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureCRoutingModule } from './feature-c-routing.module';
import { FeatureCComponent } from './feature-c.component';


@NgModule({
  declarations: [FeatureCComponent],
  imports: [
    CommonModule,
    FeatureCRoutingModule
  ]
})
export class FeatureCModule { }
