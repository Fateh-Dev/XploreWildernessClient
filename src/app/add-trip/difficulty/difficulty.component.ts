import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.scss'],
})
export class DifficultyComponent implements OnInit {
  Intensity = ['Relaxed', 'Moderate', 'Challenging'];
  Experience = ['item 1', 'item 2', 'item 3', 'item 4'];
  constructor() {}

  ngOnInit(): void {}
}
