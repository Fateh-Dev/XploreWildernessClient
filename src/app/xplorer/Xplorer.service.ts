import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class XplorerService {
  collapsed = false;

  activityList: string[] = [
    'Cross-country Skiing',
    'cycling',
    'hiking',
    'fishing',
    'climbing',
  ];
  regionList: string[] = [
    'Banff National Park',
    'California, USA',
    'Banff National Park',
  ];
  constructor() {}
}
