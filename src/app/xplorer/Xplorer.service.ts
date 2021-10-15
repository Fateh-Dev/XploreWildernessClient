import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class XplorerService {
  activityList: string[] = [
    'Cross-country Skiing',
    'cycling',
    'hiking',
    'fishing',
    'climbing',
  ];
  regionList: string[] = [
    'Cross-country Skiing',
    'cycling',
    'hiking',
    'fishing',
    'climbing',
  ];
  constructor() {}
}
