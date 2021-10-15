import { Component, OnInit } from '@angular/core';
import { AddTripService } from '../addTrip.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss'],
})
export class ItineraryComponent implements OnInit {
  steps = [];

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
  constructor(public service: AddTripService) {}

  ngOnInit(): void {
    let i = 1;
    while (i <= this.service.daysNumber) {
      this.steps.push(i);
      i++;
    }
  }
}
