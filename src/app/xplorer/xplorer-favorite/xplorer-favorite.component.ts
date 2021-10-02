import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xplorer-favorite',
  templateUrl: './xplorer-favorite.component.html',
  styleUrls: ['./xplorer-favorite.component.scss'],
})
export class XplorerFavoriteComponent implements OnInit {
  initItems = [
    'Pace Park Loop',
    'Howe Lake, Sugar Camp Lake, and Farquhar Lake',
    'Paarlberg Nature Reserve',
    'Paarl View Point Trail',
    'North Side Trail',
  ];
  items = [
    'Pace Park Loop',
    'Howe Lake, Sugar Camp Lake, and Farquhar Lake',
    'Paarlberg Nature Reserve',
    'Paarl View Point Trail',
    'North Side Trail',
  ];
  constructor() {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    if (filterValue == '') this.items = this.initItems;
    else
      this.items = this.initItems.filter((e) =>
        e.trim().toLowerCase().includes(filterValue.trim().toLowerCase())
      );
  }
  ngOnInit(): void {}
}
