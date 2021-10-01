import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-xplorer-profile',
  templateUrl: './xplorer-profile.component.html',
  styleUrls: ['./xplorer-profile.component.scss'],
})
export class XplorerProfileComponent implements OnInit {
  // accountFormGroup: FormGroup;
  // personalFormGroup: FormGroup;
  formData: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formData = this._formBuilder.group({
      accountFormGroup: this._formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
      }),
      personalFormGroup: this._formBuilder.group({
        lastName: ['', Validators.required],
        firstName: ['', Validators.required],
        gender: ['', Validators.required],
        phone: ['', Validators.required],
        address: ['', Validators.required],
        address2: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', Validators.required],
        country: ['', Validators.required],
      }),
    });

    // this.accountFormGroup = this._formBuilder.group({
    //   username: ['', Validators.required],
    //   email: ['', Validators.required],
    // });
    // this.personalFormGroup = this._formBuilder.group({
    //   lastName: ['', Validators.required],
    //   firstName: ['', Validators.required],
    //   gender: ['', Validators.required],
    //   phone: ['', Validators.required],
    //   address: ['', Validators.required],
    //   address2: [''],
    //   city: ['', Validators.required],
    //   state: ['', Validators.required],
    //   zipCode: ['', Validators.required],
    //   country: ['', Validators.required],
    // });
  }
}
