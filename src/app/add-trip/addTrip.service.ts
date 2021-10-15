import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AddTripService {
  activities = [];
  daysNumber = 5;
  tripTitle = 'Amazing 10-day cycling trip through the European Alps';
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
  public submitForm: FormGroup;
  public activityControl = new FormControl([]);
  activityCtrl = new FormControl();
  filteredActivities: Observable<string[]>;

  regionCtrl = new FormControl();
  filteredRegions: Observable<string[]>;
  regions: string[] = [];
  constructor() {}
}
