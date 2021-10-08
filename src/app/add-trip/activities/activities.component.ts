import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  activityList: string[] = ['cycling', 'hiking', 'fishing', 'climbing'];
  public submitForm: FormGroup;
  public activityControl = new FormControl([]);
  constructor() {}
  onLodgingRemoved(item: string) {
    const lodgings = this.activityControl.value as string[];
    this.removeFirst(lodgings, item);
    this.activityControl.setValue(lodgings); // To trigger change detection
  }
  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  ngOnInit(): void {}
}
