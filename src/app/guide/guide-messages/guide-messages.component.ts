import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-guide-messages',
  templateUrl: './guide-messages.component.html',
  styleUrls: ['./guide-messages.component.scss'],
})
export class GuideMessagesComponent implements OnInit {
  constructor(public service: AppService) {}
  SendMSG() {
    alert('hellos');
  }
  checkedToggle = 'all';
  switchToggle(n: string) {
    this.checkedToggle = n;
  }
  currentXplorer = 1;
  ngOnInit(): void {
    this.service.isMessage = false;
    console.log(this.service.isMessage);
  }
  setXplorer(n: number) {
    this.currentXplorer = n;
  }
  ngOnDestroy() {
    this.service.isMessage = true;
    console.log(this.service.isMessage);
  }
}
