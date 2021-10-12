import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material-module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  CdkCustomStepperWithoutFormExample,
  CustomStepper,
} from './costum-stepper/costum-stepper.component';
import { CustomStepperNumberComponent } from './custom-stepper-number/custom-stepper-number.component';
@NgModule({
  declarations: [
    CustomStepper,
    CdkCustomStepperWithoutFormExample,
    CustomStepperNumberComponent,
  ],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule],
  exports: [
    CustomStepper,
    CustomStepperNumberComponent,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
})
export class SharedComponentsModule {}
