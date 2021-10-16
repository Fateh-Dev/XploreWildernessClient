import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GuideService {
  regionList: string[] = [
    'Banff National Park',
    'California, USA',
    'Banff National Park',
  ];
  constructor() {}
}
