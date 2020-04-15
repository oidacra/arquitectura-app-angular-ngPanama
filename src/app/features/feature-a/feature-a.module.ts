import { NgModule } from '@angular/core';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { FeatureAComponent } from './feature-a.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FeatureAComponent],
  imports: [SharedModule, FeatureARoutingModule],
})
export class FeatureAModule {}
