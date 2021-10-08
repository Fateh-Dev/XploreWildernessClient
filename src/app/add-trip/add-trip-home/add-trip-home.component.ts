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
      { name: 'Activities', href: 'activities', icon: 'account_circle' },
      { name: 'Lodging', href: 'lodging', icon: 'settings' },
      { name: 'Difficulty', href: 'difficulty', icon: 'credit_card' },
      { name: 'Safety', href: 'safety', icon: 'check_circle' },
    ],
    [
      { name: 'Pick-up', href: 'pickup', icon: 'bookmark_border' },
      { name: 'Drop-off', href: 'dropoff', icon: 'settings_outline' },
    ],
    [{ name: 'Images', href: 'images', icon: 'interests' }],

    [{ name: 'Itinerary', href: 'itinerary', icon: 'lock' }],
  ];

  constructor(private service: AppService) {}

  ngOnInit(): void {}
}
