import { XplorerService } from './../../Xplorer.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-new-preference-modal',
  templateUrl: './new-preference-modal.component.html',
  styleUrls: ['./new-preference-modal.component.scss'],
})
export class NewPreferenceModalComponent implements OnInit {
  @Output()
  changeEvent: EventEmitter<string> = new EventEmitter<string>();
  formData: FormGroup;
  myControl = new FormControl();
  constructor(
    private _formBuilder: FormBuilder,
    public service: XplorerService
  ) {}

  activityPicture = '';
  options: string[] = ['hiking', 'cycling', 'fishing'];
  filteredOptions: Observable<string[]>;

  addPreference() {
    this.changeEvent.emit(this.formData.value);
  }
  ngOnInit(): void {
    this.formData = this._formBuilder.group({
      activity: ['', Validators.required],
      rate: ['', Validators.required],
      regions: [[], Validators.required],
    });
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
