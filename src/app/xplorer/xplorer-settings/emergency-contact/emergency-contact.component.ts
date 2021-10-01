import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.scss'],
})
export class EmergencyContactComponent {
  displayedColumns: string[] = [
    'name',
    'email',
    'phone',
    'relationship',
    'actions',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  email: string;
  phone: string;
  relationship: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
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
