import { NotFound404Component } from './not-found404/not-found404.component';
import { GuideDeactivateComponent } from './guide/guide-deactivate/guide-deactivate.component';
import { GuideMessagesComponent } from './guide/guide-messages/guide-messages.component';
import { GuideBillingComponent } from './guide/guide-billing/guide-billing.component';
import { GuideInsuranceComponent } from './guide/guide-insurance/guide-insurance.component';
import { GuideExperienceComponent } from './guide/guide-experience/guide-experience.component';
import { GuideHistoryTripsComponent } from './guide/guide-history-trips/guide-history-trips.component';
import { GuideScheduleTripsComponent } from './guide/guide-schedule-trips/guide-schedule-trips.component';
import { GuideTripsComponent } from './guide/guide-trips/guide-trips.component';
import { XplorerSocialComponent } from './xplorer/xplorer-social/xplorer-social.component';
import { XplorerInviteComponent } from './xplorer/xplorer-invite/xplorer-invite.component';
import { XplorerBillingComponent } from './xplorer/xplorer-billing/xplorer-billing.component';
import { XplorerFavoriteComponent } from './xplorer/xplorer-favorite/xplorer-favorite.component';
import { XplorerPreferenceComponent } from './xplorer/xplorer-preference/xplorer-preference.component';
import { XplorerHistoryComponent } from './xplorer/xplorer-history/xplorer-history.component';
import { XplorerBookingComponent } from './xplorer/xplorer-booking/xplorer-booking.component';
import { GuideHomeComponent } from './guide/guide-home/guide-home.component';
import { XplorerHomeComponent } from './xplorer/xplorer-home/xplorer-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XplorerProfileComponent } from './xplorer/xplorer-profile/xplorer-profile.component';
import { XplorerSettingsComponent } from './xplorer/xplorer-settings/xplorer-settings.component';
import { GuideProfileComponent } from './guide/guide-profile/guide-profile.component';
import { GuideSettingsComponent } from './guide/guide-settings/guide-settings.component';
import { GuideVerificationComponent } from './guide/guide-verification/guide-verification.component';

const routes: Routes = [
  {
    path: 'xplorer',
    component: XplorerHomeComponent,
    children: [
      { path: '', component: XplorerProfileComponent },
      { path: 'booking', component: XplorerBookingComponent },
      { path: 'history', component: XplorerHistoryComponent },
      { path: 'preferences', component: XplorerPreferenceComponent },
      { path: 'favorites', component: XplorerFavoriteComponent },
      { path: 'profile', component: XplorerProfileComponent },
      { path: 'settings', component: XplorerSettingsComponent },
      { path: 'billing', component: XplorerBillingComponent },
      { path: 'invites', component: XplorerInviteComponent },
      { path: 'social', component: XplorerSocialComponent },
    ],
  },
  {
    path: 'guide',
    component: GuideHomeComponent,
    children: [
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
    ],
  },
  { path: 'home', component: XplorerHomeComponent },
  { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
