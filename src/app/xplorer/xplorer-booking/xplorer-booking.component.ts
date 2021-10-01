import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-xplorer-booking',
  templateUrl: './xplorer-booking.component.html',
  styleUrls: ['./xplorer-booking.component.scss'],
})
export class XplorerBookingComponent implements OnInit {
  initItems = [
    'Pace Park Loop',
    'Howe Lake, Sugar Camp Lake, and Farquhar Lake',
    'Paarlberg Nature Reserve',
    'Paarl View Point Trail',
    'North Side Trail',
  ];
  items = [
    'Pace Park Loop',
    'Howe Lake, Sugar Camp Lake, and Farquhar Lake',
    'Paarlberg Nature Reserve',
    'Paarl View Point Trail',
    'North Side Trail',
  ];
  constructor() {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    if (filterValue == '') this.items = this.initItems;
    else
      this.items = this.initItems.filter((e) =>
        e.trim().toLowerCase().includes(filterValue.trim().toLowerCase())
      );
  }
  ngOnInit(): void {}
}
