import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-guide-billing',
  templateUrl: './guide-billing.component.html',
  styleUrls: ['./guide-billing.component.scss'],
})
export class GuideBillingComponent implements OnInit {
  step = 2;
  checked: number = -1;
  selected: Date | null;
  setStep(index: number) {
    this.step = index;
  }
  constructor(private _snackBar: MatSnackBar) {}
  checkIt(n: number) {
    this.checked = n;
  }
  nextStep() {
    this.step++;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['success-snackbar'],
    });
  }
  prevStep() {
    this.step--;
  }
  addMore() {
    alert('logic not yet implemented');
  }
  ngOnInit(): void {}
}
