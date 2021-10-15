import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-trip',
  templateUrl: './review-trip.component.html',
  styleUrls: ['./review-trip.component.scss'],
})
export class ReviewTripComponent implements OnInit {
  rate = 0;
  constructor() {}

  ngOnInit(): void {}
}
