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
  selector: 'app-guide-schedule-trips',
  templateUrl: './guide-schedule-trips.component.html',
  styleUrls: ['./guide-schedule-trips.component.scss'],
})
export class GuideScheduleTripsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'region',
    'activities',
    'trip_date',
    'end_date',
    'booking',
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
  id: number;
  title: string;
  region: string;
  activities: string;
  trip_date: string;
  end_date: string;
  booking: number;
  date_range: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    end_date: '10-Mai-2021',
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: 2,
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    end_date: '10-Mai-2021',
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: 5,
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    end_date: '10-Mai-2021',
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: 2,
    title: 'Monterey, Ca Carmel and the Carmel and thermel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    end_date: '10-Mai-2021',
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: 3,
    title:
      'Monterey, Carmel and the  Carmel and the Carmel and the Carmel and the…',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    end_date: '10-Mai-2021',
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: 2,
    title:
      'Monterey, Carm Carmel and the Carmel and the Carmel and theel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    end_date: '10-Mai-2021',
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: 2,
    title:
      'Monterey, Carmel  Carmel and the Carmel and the Carmel and theand the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    end_date: '10-Mai-2021',
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: 3,
    title: 'Monterey, Carmel and the Carmel and the Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    end_date: '10-Mai-2021',
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: 4,
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    end_date: '10-Mai-2021',
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: 5,
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    end_date: '10-Mai-2021',
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: 6,
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    end_date: '10-Mai-2021',
    booking: 5,
    date_range: 'hlkh',
  },
];
