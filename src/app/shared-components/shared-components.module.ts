import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material-module';
import {
  CdkCustomStepperWithoutFormExample,
  CustomStepper,
} from './costum-stepper/costum-stepper.component';
@NgModule({
  declarations: [CustomStepper, CdkCustomStepperWithoutFormExample],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [CustomStepper, MaterialModule, FlexLayoutModule],
})
export class SharedComponentsModule {}
