import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostumStepperComponent } from './costum-stepper/costum-stepper.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material-module';
import { CdkStepperModule } from '@angular/cdk/stepper';

@NgModule({
  declarations: [CostumStepperComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialModule, CdkStepperModule],
})
export class SharedComponentsModule {}
