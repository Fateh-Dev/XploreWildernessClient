import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material-module';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {
  CdkCustomStepperWithoutFormExample,
  CustomStepper,
} from './costum-stepper/costum-stepper.component';
@NgModule({
  declarations: [CustomStepper, CdkCustomStepperWithoutFormExample],
  imports: [CommonModule, FlexLayoutModule, MaterialModule, CdkStepperModule],
  exports: [CustomStepper, CdkCustomStepperWithoutFormExample],
})
export class SharedComponentsModule {}
