import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss'],
})
export class ItineraryComponent implements OnInit {
  steps = [1, 2, 3, 4, 5];

  breakfast = [
    'Continental Buffet',
    'Made fresh in the field',
    'Fresh packed by guides',
    'Xplorer packed',
  ];
  lunch = [
    'Continental Buffet',
    'Made fresh in the field',
    'Fresh packed by guides',
    'Xplorer packed',
  ];
  dinner = [
    'Continental Buffet',
    'Made fresh in the field',
    'Fresh packed by guides',
    'Xplorer packed',
  ];
  constructor() {}

  ngOnInit(): void {}
}
