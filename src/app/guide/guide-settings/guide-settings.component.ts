import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-guide-settings',
  templateUrl: './guide-settings.component.html',
  styleUrls: ['./guide-settings.component.scss'],
})
export class GuideSettingsComponent implements OnInit {
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
