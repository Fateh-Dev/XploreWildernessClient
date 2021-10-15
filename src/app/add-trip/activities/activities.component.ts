import { AddTripService } from './../addTrip.service';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild('activityInput') activityInput: ElementRef<HTMLInputElement>;
  @ViewChild('regionInput') regionInput: ElementRef<HTMLInputElement>;

  constructor(
    public cd: ChangeDetectorRef,
    private fb: FormBuilder,
    public service: AddTripService
  ) {
    this.service.filteredActivities =
      this.service.activityCtrl.valueChanges.pipe(
        startWith(null),
        map((item: string | null) =>
          item ? this._filterActivity(item) : this.service.activityList.slice()
        )
      );

    this.service.filteredRegions = this.service.regionCtrl.valueChanges.pipe(
      startWith(null),
      map((item: string | null) =>
        item ? this._filterRegion(item) : this.service.regionList.slice()
      )
    );
  }

  addActivity(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.service.activities.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
    this.service.activityCtrl.setValue(null);
  }

  removeActivity(item: string): void {
    const index = this.service.activities.indexOf(item);
    if (index >= 0) {
      this.service.activities.splice(index, 1);
    }
  }

  selectedActivity(event: MatAutocompleteSelectedEvent): void {
    this.service.activities.push(event.option.viewValue);

    this.activityInput.nativeElement.value = '';
    this.service.activityCtrl.setValue(null);
  }

  private _filterActivity(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.service.activityList.filter((item) =>
      item.toLowerCase().includes(filterValue)
    );
  }

  addRegion(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.service.regions.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
    this.service.regionCtrl.setValue(null);
  }

  removeRegion(item: string): void {
    const index = this.service.regions.indexOf(item);
    if (index >= 0) {
      this.service.regions.splice(index, 1);
    }
  }

  selectedRegion(event: MatAutocompleteSelectedEvent): void {
    this.service.regions.push(event.option.viewValue);
    this.regionInput.nativeElement.value = '';
    this.service.regionCtrl.setValue(null);
  }

  private _filterRegion(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.service.regionList.filter((item) =>
      item.toLowerCase().includes(filterValue)
    );
  }
  ngOnInit(): void {}
}
