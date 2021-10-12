import { Component, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-custom-stepper-number',
  templateUrl: './custom-stepper-number.component.html',
  styleUrls: ['./custom-stepper-number.component.scss'],
  providers: [
    { provide: CdkStepper, useExisting: CustomStepperNumberComponent },
  ],
})
export class CustomStepperNumberComponent extends CdkStepper {
  @Input()
  lineWidth = 180;

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
