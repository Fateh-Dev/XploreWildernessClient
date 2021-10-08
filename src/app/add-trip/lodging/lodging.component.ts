import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging',
  templateUrl: './lodging.component.html',
  styleUrls: ['./lodging.component.scss'],
})
export class LodgingComponent implements OnInit {
  Lodgins = [
    'Hotels',
    'Hostels',
    'Backcountry Camping',
    'Frontcountry Camping',
    'Alpine Huts',
    'Vans',
    'RVs',
  ];
  Amenities = [
    'Full-service bathrooms',
    'Full-service kitchen',
    'Power',
    'Running water',
    'Outhouse',
    'Air-conditioning',
    'Fans',
    'Heating',
  ];
  Occupancy = ['Single', 'Double', 'Quad'];
  constructor() {}

  ngOnInit(): void {}
}
