import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xplorer-home',
  templateUrl: './xplorer-home.component.html',
  styleUrls: ['./xplorer-home.component.scss'],
})
export class XplorerHomeComponent implements OnInit {
  public links = [
    { name: 'Profile', href: 'profile', icon: 'badge' },
    { name: 'Settings', href: 'settings', icon: 'settings_outline' },
    { name: 'Verification', href: 'verification', icon: 'view_list' },
  ];
  public linksUp = [
    { name: 'Payment', href: 'billing', icon: 'credit_card' },
    {
      name: 'Insurance',
      href: 'insurance',
      icon: 'account_balance_wallet',
    },
  ];
  public linksDown = [
    { name: 'Desactivate', href: 'desactivate', icon: 'lock' },
  ];
  public Message = [{ name: 'Messages', href: 'messages', icon: 'message' }];
  public TripsItems = [
    { name: 'My Trips', href: 'trips', icon: 'travel_explore' },
    { name: 'Schedule', href: 'schedule', icon: 'date_range' },
    { name: 'History', href: 'history', icon: 'history' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
