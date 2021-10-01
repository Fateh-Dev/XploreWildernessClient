import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-xplorer-billing',
  templateUrl: './xplorer-billing.component.html',
  styleUrls: ['./xplorer-billing.component.scss'],
})
export class XplorerBillingComponent implements OnInit {
  step = 0;
  checked: number = -1;
  selected: Date | null;

  setStep(index: number) {
    this.step = index;
  }
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}
  checkIt(n: number) {
    this.checked = n;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['success-snackbar'],
    });
  }

  addMore() {
    alert('logic not yet implemented');
  }
  ngOnInit(): void {}
}
