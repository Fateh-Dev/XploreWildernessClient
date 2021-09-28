import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-guide-home',
  templateUrl: './guide-home.component.html',
  styleUrls: ['./guide-home.component.scss'],
})
export class GuideHomeComponent implements OnInit {
  isMessage = false;
  public links = [
    [
      { name: 'Profile', href: 'profile', icon: 'badge' },
      { name: 'Settings', href: 'settings', icon: 'settings_outline' },
      { name: 'Verification', href: 'verification', icon: 'check_circle' },
    ],
    [
      { name: 'My Trips', href: 'trips', icon: 'travel_explore' },
      { name: 'Schedule Trips', href: 'schedule', icon: 'date_range' },
      { name: 'Trip History', href: 'history', icon: 'history' },
    ],
    [
      { name: 'Guiding Experience', href: 'experience', icon: 'view_list' },
      { name: 'Insurance', href: 'insurance', icon: 'account_balance_wallet' },
      { name: 'Billing', href: 'billing', icon: 'credit_card' },
    ],
    [{ name: 'Messages', href: 'message', icon: 'message' }],
    [{ name: 'Deactivate', href: 'deactivate', icon: 'lock' }],
  ];

  constructor(public service: AppService) {}

  ngOnInit(): void {}
}
