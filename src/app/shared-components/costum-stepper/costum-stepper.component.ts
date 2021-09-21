import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

/** @title A custom CDK stepper without a form */
@Component({
  selector: 'cdk-custom-stepper-without-form-example',
  templateUrl: './cdk-custom-stepper-without-form-example.html',
  styleUrls: ['./cdk-custom-stepper-without-form-example.css'],
})
export class CostumStepperComponent {}

/** Custom CDK stepper component */
@Component({
  selector: 'app-costum-stepper',
  templateUrl: './costum-stepper.component.html',
  styleUrls: ['./costum-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepper }],
})
export class CustomStepper extends CdkStepper {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
