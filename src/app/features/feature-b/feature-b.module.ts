import { NgModule } from '@angular/core';


import { FeatureBRoutingModule } from './feature-b-routing.module';
import { FeatureBComponent } from './feature-b.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FeatureBComponent],
  imports: [
    SharedModule,
    FeatureBRoutingModule
  ]
})
export class FeatureBModule { }
