import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-add-trip-home',
  templateUrl: './add-trip-home.component.html',
  styleUrls: ['./add-trip-home.component.scss'],
})
export class AddTripHomeComponent implements OnInit {
  public links = [
    [
      { name: 'Activities', href: 'activities', icon: 'info' },
      { name: 'Lodging', href: 'lodging', icon: 'hotel' },
      { name: 'Difficulty', href: 'difficulty', icon: 'info' },
      { name: 'Safety', href: 'safety', icon: 'info' },
    ],
    [
      { name: 'Pick-up', href: 'pickup', icon: 'room' },
      { name: 'Drop-off', href: 'dropoff', icon: 'room' },
    ],
    [{ name: 'Images', href: 'images', icon: 'crop_original' }],

    [{ name: 'Itinerary', href: 'itinerary', icon: 'alt_route' }],
  ];

  constructor(private service: AppService) {}

  ngOnInit(): void {}
}
