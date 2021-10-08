import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
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

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  activityCtrl = new FormControl();
  regionCtrl = new FormControl();
  filteredActivities: Observable<string[]>;
  filteredRegions: Observable<string[]>;
  activities: string[] = [];
  regions: string[] = [];

  @ViewChild('activityInput') activityInput: ElementRef<HTMLInputElement>;
  @ViewChild('regionInput') regionInput: ElementRef<HTMLInputElement>;

  constructor(public cd: ChangeDetectorRef) {
    this.filteredActivities = this.activityCtrl.valueChanges.pipe(
      startWith(null),
      map((item: string | null) =>
        item ? this._filterActivity(item) : this.activityList.slice()
      )
    );
    this.filteredRegions = this.regionCtrl.valueChanges.pipe(
      startWith(null),
      map((item: string | null) =>
        item ? this._filterRegion(item) : this.regionList.slice()
      )
    );
  }

  addActivity(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.activities.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
    this.activityCtrl.setValue(null);
  }

  removeActivity(item: string): void {
    const index = this.activities.indexOf(item);
    if (index >= 0) {
      this.activities.splice(index, 1);
    }
  }

  selectedActivity(event: MatAutocompleteSelectedEvent): void {
    this.activities.push(event.option.viewValue);

    this.activityInput.nativeElement.value = '';
    this.activityCtrl.setValue(null);
  }

  private _filterActivity(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.activityList.filter((item) =>
      item.toLowerCase().includes(filterValue)
    );
  }
  addRegion(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.regions.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
    this.regionCtrl.setValue(null);
  }

  removeRegion(item: string): void {
    const index = this.regions.indexOf(item);
    if (index >= 0) {
      this.regions.splice(index, 1);
    }
  }

  selectedRegion(event: MatAutocompleteSelectedEvent): void {
    this.regions.push(event.option.viewValue);
    this.regionInput.nativeElement.value = '';
    this.regionCtrl.setValue(null);
  }

  private _filterRegion(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.regionList.filter((item) =>
      item.toLowerCase().includes(filterValue)
    );
  }
  ngOnInit(): void {}
}
