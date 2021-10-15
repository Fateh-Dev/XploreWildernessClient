import { MatDialog } from '@angular/material/dialog';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-favorite-trip-item',
  templateUrl: './favorite-trip-item.component.html',
  styleUrls: ['./favorite-trip-item.component.scss'],
})
export class FavoriteTripItemComponent implements OnInit {
  @Input()
  items = [];
  @ViewChild('bookNow', { static: true, read: TemplateRef })
  public templateBook: TemplateRef<any>;
  bookDialogRef: any;
  openBook() {
    this.bookDialogRef = this.dialog.open(this.templateBook, {
      data: {},
      panelClass: 'pad-none',
      minWidth: '765px',
      maxWidth: '765px',
      maxHeight: '512px',
    });
  }
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
}
