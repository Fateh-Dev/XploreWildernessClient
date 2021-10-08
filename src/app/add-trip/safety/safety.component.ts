import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.scss'],
})
export class SafetyComponent implements OnInit {
  IncludedGear = [
    'Bear Spray',
    '2-way Radio',
    'Backcountry Camping',
    'Frontcountry Camping',
    'Alpine Huts',
    'Vans',
    'RVs',
  ];
  RequiredGear = [
    'Bear Spray',
    '2-way Radio',
    'First Aid Kit',
    'Anti Blister Kit',
    'Sunscreen',
    'Sunglasses',
    'RVs',
  ];
  Risks = [
    'Bear Spray',
    'Wildlife',
    'Thunderstorms',
    'Heatstroke',
    'Alpine Huts',
    'Vans',
    'RVs',
  ];
  constructor() {}

  ngOnInit(): void {}
}
