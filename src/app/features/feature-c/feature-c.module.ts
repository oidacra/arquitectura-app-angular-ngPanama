import { NgModule } from '@angular/core';

import { FeatureCRoutingModule } from './feature-c-routing.module';
import { FeatureCComponent } from './feature-c.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FeatureCComponent],
  imports: [
    SharedModule,
    FeatureCRoutingModule
  ]
})
export class FeatureCModule { }
