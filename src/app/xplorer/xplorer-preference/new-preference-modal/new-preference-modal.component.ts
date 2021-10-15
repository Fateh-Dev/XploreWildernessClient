import { XplorerService } from './../../Xplorer.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-preference-modal',
  templateUrl: './new-preference-modal.component.html',
  styleUrls: ['./new-preference-modal.component.scss'],
})
export class NewPreferenceModalComponent implements OnInit {
  @Output()
  changeEvent: EventEmitter<string> = new EventEmitter<string>();
  formData: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    public service: XplorerService
  ) {}

  addPreference() {
    this.changeEvent.emit(this.formData.value);
  }
  ngOnInit(): void {
    this.formData = this._formBuilder.group({
      activity: ['', Validators.required],
      rate: ['', Validators.required],
      regions: [[], Validators.required],
    });
  }
}
