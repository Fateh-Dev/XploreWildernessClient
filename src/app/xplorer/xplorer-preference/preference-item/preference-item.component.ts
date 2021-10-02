import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preference-item',
  templateUrl: './preference-item.component.html',
  styleUrls: ['./preference-item.component.scss'],
})
export class PreferenceItemComponent implements OnInit {
  @Input()
  items = [];
  constructor() {}

  ngOnInit(): void {}
}
