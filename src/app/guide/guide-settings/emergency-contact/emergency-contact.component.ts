import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.scss'],
})
export class EmergencyContactComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'email',
    'phone',
    'relationship',
    'actions',
  ];
  ELEMENT_DATA: PeriodicElement[] = [
    {
      name: 'Jean Claude',
      email: 'Jean@gmail.com',
      phone: '+1989484930',
      relationship: 'Brother',
    },
    {
      name: 'Jean Claude',
      email: 'Jean@gmail.com',
      phone: '+1989484930',
      relationship: 'Brother',
    },
    {
      name: 'Jean Claude',
      email: 'Jean@gmail.com',
      phone: '+1989484930',
      relationship: 'Brother',
    },
    {
      name: 'Jean Claude',
      email: 'Jean@gmail.com',
      phone: '+1989484930',
      relationship: 'Brother',
    },
    {
      name: 'Jean Claude',
      email: 'Jean@gmail.com',
      phone: '+1989484930',
      relationship: 'Brother',
    },
    {
      name: 'Jean Claude',
      email: 'Jean@gmail.com',
      phone: '+1989484930',
      relationship: 'Brother',
    },
    {
      name: 'Jean Claude',
      email: 'Jean@gmail.com',
      phone: '+1989484930',
      relationship: 'Brother',
    },
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  formData: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    public cd: ChangeDetectorRef
  ) {}
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  addContact() {
    // console.log(this.formData.vssalue);
    if (this.formData.valid) this.ELEMENT_DATA.push(this.formData.value);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.cd.markForCheck();
  }

  ngOnInit() {
    this.formData = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      relationship: ['', Validators.required],
    });
  }
}

export interface PeriodicElement {
  name: string;
  email: string;
  phone: string;
  relationship: string;
}
