import { XplorerService } from './../Xplorer.service';
import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-xplorer-messages',
  templateUrl: './xplorer-messages.component.html',
  styleUrls: ['./xplorer-messages.component.scss'],
})
export class XplorerMessagesComponent implements AfterViewChecked {
  constructor(public xplorerService: XplorerService) {
    this.xplorerService.collapsed = true;
  }

  ngOnInit(): void {}
  ngAfterViewChecked() {}
}
