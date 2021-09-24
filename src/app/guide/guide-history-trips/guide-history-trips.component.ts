import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-guide-history-trips',
  templateUrl: './guide-history-trips.component.html',
  styleUrls: ['./guide-history-trips.component.scss'],
})
export class GuideHistoryTripsComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'region',
    'activities',
    'trip_date',
    'booking',
    'revenue',
    'date_range',
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
  id: string;
  title: string;
  region: string;
  activities: string;
  trip_date: string;
  revenue: number;
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
    revenue: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    revenue: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '3',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    revenue: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    revenue: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '3',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    revenue: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '2',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    revenue: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '3',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    revenue: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '4',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    revenue: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '5',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    revenue: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
  {
    id: '6',
    title: 'Monterey, Carmel and the …',
    region: 'California, USA',
    activities: 'H',
    trip_date: '10-Mai-2021',
    revenue: 1200,
    booking: 5,
    date_range: 'hlkh',
  },
];
