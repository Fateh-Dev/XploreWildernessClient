import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-xplorer-preference',
  templateUrl: './xplorer-preference.component.html',
  styleUrls: ['./xplorer-preference.component.scss'],
})
export class XplorerPreferenceComponent implements OnInit {
  @ViewChild('addNewPreference', { static: true, read: TemplateRef })
  public template: TemplateRef<any>;
  SwitchDialogRef: any;
  items = [
    'Pace Park Loop',
    'Howe Lake, Sugar Camp Lake, and Farquhar Lake',
    'Paarlberg Nature Reserve',
    'Paarl View Point Trail',
    'North Side Trail',
  ];
  constructor(public dialog: MatDialog) {}
  openModal() {
    this.SwitchDialogRef = this.dialog.open(this.template, {
      data: {},
      panelClass: 'pad-none',
      minWidth: '871px',
      maxWidth: '60vw',
      maxHeight: '90vh',
    });
  }
  ngOnInit(): void {}
}
