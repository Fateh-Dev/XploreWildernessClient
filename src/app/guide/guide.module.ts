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
import { GuideExperienceComponent } from './guide-experience/guide-experience.component';
import { GuideInsuranceComponent } from './guide-insurance/guide-insurance.component';
import { GuideBillingComponent } from './guide-billing/guide-billing.component';
import { GuideMessagesComponent } from './guide-messages/guide-messages.component';
import { GuideDeactivateComponent } from './guide-deactivate/guide-deactivate.component';
import { TripItemComponent } from './guide-trips/trip-item/trip-item.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { EmergencyContactComponent } from './guide-settings/emergency-contact/emergency-contact.component';
@NgModule({
  declarations: [
    GuideHomeComponent,
    GuideProfileComponent,
    GuideTripsComponent,
    GuideScheduleTripsComponent,
    GuideHistoryTripsComponent,
    GuideSettingsComponent,
    GuideVerificationComponent,
    GuideExperienceComponent,
    GuideInsuranceComponent,
    GuideBillingComponent,
    GuideMessagesComponent,
    GuideDeactivateComponent,
    TripItemComponent,
    EmergencyContactComponent,
  ],
  imports: [CommonModule, GuideRoutingModule, SharedComponentsModule],
})
export class GuideModule {}
