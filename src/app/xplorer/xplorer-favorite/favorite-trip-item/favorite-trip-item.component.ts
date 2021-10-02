import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-trip-item',
  templateUrl: './favorite-trip-item.component.html',
  styleUrls: ['./favorite-trip-item.component.scss'],
})
export class FavoriteTripItemComponent implements OnInit {
  @Input()
  items = [];
  constructor() {}

  ngOnInit(): void {}
}
