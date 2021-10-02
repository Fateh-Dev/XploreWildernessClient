import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-xplorer-invite',
  templateUrl: './xplorer-invite.component.html',
  styleUrls: ['./xplorer-invite.component.scss'],
})
export class XplorerInviteComponent implements OnInit {
  formData: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}
  value = '';
  ngOnInit(): void {}
}
