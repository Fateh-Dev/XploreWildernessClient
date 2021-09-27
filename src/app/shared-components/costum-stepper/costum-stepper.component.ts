import { Component, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

/** @title A custom CDK stepper without a form */
@Component({
  selector: 'cdk-custom-stepper-without-form-example',
  templateUrl: 'cdk-custom-stepper-without-form-example.html',
  styleUrls: ['cdk-custom-stepper-without-form-example.scss'],
})
export class CdkCustomStepperWithoutFormExample {}

/** Custom CDK stepper component */
@Component({
  selector: 'example-custom-stepper',
  templateUrl: 'example-custom-stepper.html',
  styleUrls: ['example-custom-stepper.scss'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepper }],
})
export class CustomStepper extends CdkStepper {
  @Input()
  lineWidth = 180;
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
