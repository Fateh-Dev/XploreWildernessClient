import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-guide-experience',
  templateUrl: './guide-experience.component.html',
  styleUrls: ['./guide-experience.component.scss'],
})
export class GuideExperienceComponent implements OnInit {
  myControl = new FormControl();
  parcs = [];
  options: string[] = ['hiking', 'cycling', 'fishing'];
  filteredOptions: Observable<string[]>;
  activityPicture = '';
  addChip(item) {
    this.parcs.push(item);
    console.log(this.parcs);
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
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
}
