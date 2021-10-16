import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-guide-experience',
  templateUrl: './guide-experience.component.html',
  styleUrls: ['./guide-experience.component.scss'],
})
export class GuideExperienceComponent implements OnInit {
  myControl = new FormControl();
  regionControl = new FormControl();
  regionControl2 = new FormControl();
  regionControl3 = new FormControl();
  @ViewChild('regionInput') regionInput: ElementRef<HTMLInputElement>;
  @ViewChild('regionInput2') regionInput2: ElementRef<HTMLInputElement>;
  @ViewChild('regionInput3') regionInput3: ElementRef<HTMLInputElement>;
  parcs = [];
  parcs2 = [];
  parcs3 = [];
  options: string[] = ['hiking', 'cycling', 'fishing'];
  regions: string[] = [
    'Banff National Park',
    'California, USA',
    'Banff National Park',
  ];
  filteredOptions: Observable<string[]>;
  filteredRegions: Observable<string[]>;
  filteredRegions2: Observable<string[]>;
  filteredRegions3: Observable<string[]>;
  activityPicture = '';
  addChip(event: MatAutocompleteSelectedEvent) {
    this.parcs.push(event.option.viewValue);
    this.regionInput.nativeElement.value = '';
    this.regionControl.setValue('');
    // this.regionInput.nativeElement.value = '';
    // this.regionControl.setValue(null);
    // console.log(item);
  }
  addChip2(event: MatAutocompleteSelectedEvent) {
    this.parcs2.push(event.option.viewValue);
    this.regionInput2.nativeElement.value = '';
    this.regionControl2.setValue('');
    // console.log(item);
  }
  addChip3(event: MatAutocompleteSelectedEvent) {
    this.parcs3.push(event.option.viewValue);
    this.regionInput3.nativeElement.value = '';
    this.regionControl3.setValue('');
    // console.log(item);
  }
  removeRegion(i) {
    this.parcs.splice(i, 1);
  }
  removeRegion2(i) {
    this.parcs2.splice(i, 1);
  }
  removeRegion3(i) {
    this.parcs3.splice(i, 1);
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
    this.filteredRegions = this.regionControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter_regions(value))
    );
    this.filteredRegions2 = this.regionControl2.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter_regions(value))
    );
    this.filteredRegions3 = this.regionControl3.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter_regions(value))
    );
  }

  private _filter(value: string): string[] {
    if (this.activityPicture == '') this.activityPicture = 'thumbnail';
    const filterValue = value.toLowerCase();
    this.activityPicture = filterValue;
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  private _filter_regions(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.regions.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
