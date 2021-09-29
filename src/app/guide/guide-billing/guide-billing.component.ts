import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  @ViewChild('ConfirmSwitch', { static: true, read: TemplateRef })
  public templateSwitch: TemplateRef<any>;
  SwitchDialogRef: any;

  @ViewChild('Download', { static: true, read: TemplateRef })
  public templateDownload: TemplateRef<any>;
  DownloadDialogRef: any;

  @ViewChild('ConfirmDelete', { static: true, read: TemplateRef })
  public templateDelete: TemplateRef<any>;
  DeleteDialogRef: any;

  setStep(index: number) {
    this.step = index;
  }
  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}
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
  openConfirmDelete() {
    this.DeleteDialogRef = this.dialog.open(this.templateDelete, {
      data: {},
      panelClass: 'pad-none',
      minWidth: '500px',
      maxWidth: '40vw',
      minHeight: '150px',
    });
  }
  openDownload() {
    this.DownloadDialogRef = this.dialog.open(this.templateDownload, {
      data: {},
      panelClass: 'pad-none',
      minWidth: '500px',
      maxWidth: '40vw',
    });
  }
  openSwitchMethod() {
    this.SwitchDialogRef = this.dialog.open(this.templateSwitch, {
      data: {},
      panelClass: 'pad-none',
      minWidth: '500px',
      maxWidth: '40vw',
      minHeight: '150px',
    });
  }
  ngOnInit(): void {}
}
