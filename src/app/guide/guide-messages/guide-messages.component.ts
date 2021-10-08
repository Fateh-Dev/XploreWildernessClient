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

  ngOnInit(): void {}

  ngOnDestroy() {}
}
