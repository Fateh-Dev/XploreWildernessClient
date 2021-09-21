import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xplorer-home',
  templateUrl: './xplorer-home.component.html',
  styleUrls: ['./xplorer-home.component.scss'],
})
export class XplorerHomeComponent implements OnInit {
  public links = [
    [
      { name: 'Profile', href: 'profile', icon: 'badge' },
      { name: 'Settings', href: 'settings', icon: 'settings_outline' },
      { name: 'Verification', href: 'verification', icon: 'view_list' },
    ],
    [
      { name: 'My Trips', href: 'profile', icon: 'badge' },
      { name: 'Schedule Trips', href: 'profile', icon: 'badge' },
      { name: 'Trip History', href: 'profile', icon: 'history' },
    ],
    [
      { name: 'Guiding Experience', href: 'profile', icon: 'badge' },
      { name: 'Insurance', href: 'profile', icon: 'badge' },
      { name: 'Payments', href: 'profile', icon: 'credit_card' },
    ],
    [{ name: 'Messages', href: 'profile', icon: 'message' }],
    [{ name: 'Deactivate', href: 'profile', icon: 'badge' }],
  ];

  constructor() {}

  ngOnInit(): void {}
}
