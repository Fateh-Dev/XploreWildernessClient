import { MatDialog } from '@angular/material/dialog';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-trip-item',
  templateUrl: './trip-item.component.html',
  styleUrls: ['./trip-item.component.scss'],
})
export class TripItemComponent implements OnInit {
  @Input()
  items = [];
  @ViewChild('cancel', { static: true, read: TemplateRef })
  public templateCancel: TemplateRef<any>;
  CancelDialogRef: any;
  @ViewChild('reschedule', { static: true, read: TemplateRef })
  public templateReschedule: TemplateRef<any>;
  RescheduleDialogRef: any;
  openCancel() {
    this.CancelDialogRef = this.dialog.open(this.templateCancel, {
      data: {},
      panelClass: 'pad-none',
      minWidth: '678px',
      maxWidth: '678px',
      maxHeight: '512px',
    });
  }
  openReschedule() {
    this.RescheduleDialogRef = this.dialog.open(this.templateReschedule, {
      data: {},
      panelClass: 'pad-none',
      minWidth: '678px',
      maxWidth: '678px',
      maxHeight: '512px',
    });
  }
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
}
