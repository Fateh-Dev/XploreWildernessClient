import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-xplorer-history',
  templateUrl: './xplorer-history.component.html',
  styleUrls: ['./xplorer-history.component.scss'],
})
export class XplorerHistoryComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'region',
    'activities',
    'trip_date',
    'review',
    'date_range',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  colors = [
    '#FC7F031A',
    '#6BAD371A',
    '#2699FB1A',
    '#FC7F031A',
    '#57B8BC33',
    '#6BAD371A',
    'whitesmoke',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private snackbar: MatSnackBar) {}
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  ngOnInit(): void {
    // this.snackbar.open(
    //   'Two line text string. One to two lines is preferable on mobile and tablet.',
    //   'close',
    //   {
    //     duration: 10000,
    //     panelClass: ['success-snackbar'],
    //     horizontalPosition: 'center',
    //     verticalPosition: 'top',
    //   }
    // );
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  id: string;
  title: string;
  region: string;
  activities: string;
  trip_date: string;
  review: number;
  booking: number;
  date_range: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: '1',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '3',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '3',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '3',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '4',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '5',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '6',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    review: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
];
