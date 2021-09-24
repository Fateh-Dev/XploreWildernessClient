import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideBillingComponent } from './guide-billing/guide-billing.component';
import { GuideDeactivateComponent } from './guide-deactivate/guide-deactivate.component';
import { GuideExperienceComponent } from './guide-experience/guide-experience.component';
import { GuideHistoryTripsComponent } from './guide-history-trips/guide-history-trips.component';
import { GuideInsuranceComponent } from './guide-insurance/guide-insurance.component';
import { GuideMessagesComponent } from './guide-messages/guide-messages.component';
import { GuideProfileComponent } from './guide-profile/guide-profile.component';
import { GuideScheduleTripsComponent } from './guide-schedule-trips/guide-schedule-trips.component';
import { GuideSettingsComponent } from './guide-settings/guide-settings.component';
import { GuideTripsComponent } from './guide-trips/guide-trips.component';
import { GuideVerificationComponent } from './guide-verification/guide-verification.component';

const routes: Routes = [
  { path: '', component: GuideProfileComponent },
  { path: 'profile', component: GuideProfileComponent },
  { path: 'settings', component: GuideSettingsComponent },
  { path: 'verification', component: GuideVerificationComponent },
  { path: 'trips', component: GuideTripsComponent },
  { path: 'schedule', component: GuideScheduleTripsComponent },
  { path: 'history', component: GuideHistoryTripsComponent },
  { path: 'experience', component: GuideExperienceComponent },
  { path: 'insurance', component: GuideInsuranceComponent },
  { path: 'billing', component: GuideBillingComponent },
  { path: 'message', component: GuideMessagesComponent },
  { path: 'deactivate', component: GuideDeactivateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideRoutingModule {}
