import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xplorer-booking',
  templateUrl: './xplorer-booking.component.html',
  styleUrls: ['./xplorer-booking.component.scss'],
})
export class XplorerBookingComponent implements OnInit {
  trips = ['1', '2', '3', '4', '5', '6'];
  subtrip = this.trips.slice(0, 4);
  constructor() {}
  index = null;
  images = [
    { path: 'assets/images/others/homepage.jpg' },
    { path: 'assets/images/others/homepage.jpg' },
    { path: 'assets/images/others/homepage.jpg' },
  ];
  ngOnInit(): void {}
}
