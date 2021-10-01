import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xplorer-home',
  templateUrl: './xplorer-home.component.html',
  styleUrls: ['./xplorer-home.component.scss'],
})
export class XplorerHomeComponent implements OnInit {
  /**
   *
   */

  public links = [
    [
      { name: 'Profile', href: 'profile', icon: 'account_circle' },
      { name: 'Settings', href: 'settings', icon: 'settings' },
      { name: 'Billing', href: 'billing', icon: 'credit_card' },
      { name: 'Verification', href: 'verification', icon: 'check_circle' },
    ],
    [
      { name: 'Booking', href: 'booking', icon: 'bookmark_border' },
      { name: 'History', href: 'history', icon: 'settings_outline' },
    ],
    [
      { name: 'Preferences', href: 'preferences', icon: 'interests' },
      { name: 'Favorites', href: 'favorites', icon: 'favorite_border' },
    ],

    [{ name: 'Invite Friends', href: 'invites', icon: 'group_add' }],
    [{ name: 'Messages', href: 'message', icon: 'message' }],
    [{ name: 'Deactivate', href: 'deactivate', icon: 'lock' }],
  ];

  constructor(private service: AppService) {}

  ngOnInit(): void {}
}
