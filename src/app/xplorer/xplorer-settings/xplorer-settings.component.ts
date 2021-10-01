import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-xplorer-settings',
  templateUrl: './xplorer-settings.component.html',
  styleUrls: ['./xplorer-settings.component.scss'],
})
export class XplorerSettingsComponent implements OnInit {
  notificationFormGroup: FormGroup;
  uniteFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.notificationFormGroup = this._formBuilder.group({
      xplorer: [false],
      team: [true],
    });
    this.uniteFormGroup = this._formBuilder.group({
      currency: ['', Validators.required],
      distance: ['', Validators.required],
      timeZone: ['', Validators.required],
    });
  }
}
