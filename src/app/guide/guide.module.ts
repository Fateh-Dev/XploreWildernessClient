import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuideRoutingModule } from './guide-routing.module';
import { GuideHomeComponent } from './guide-home/guide-home.component';
import { GuideProfileComponent } from './guide-profile/guide-profile.component';
import { GuideTripsComponent } from './guide-trips/guide-trips.component';
import { GuideScheduleTripsComponent } from './guide-schedule-trips/guide-schedule-trips.component';
import { GuideHistoryTripsComponent } from './guide-history-trips/guide-history-trips.component';
import { GuideSettingsComponent } from './guide-settings/guide-settings.component';
import { GuideVerificationComponent } from './guide-verification/guide-verification.component';


@NgModule({
  declarations: [
    GuideHomeComponent,
    GuideProfileComponent,
    GuideTripsComponent,
    GuideScheduleTripsComponent,
    GuideHistoryTripsComponent,
    GuideSettingsComponent,
    GuideVerificationComponent
  ],
  imports: [
    CommonModule,
    GuideRoutingModule
  ]
})
export class GuideModule { }
