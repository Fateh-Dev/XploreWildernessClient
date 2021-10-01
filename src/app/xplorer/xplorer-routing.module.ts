import { XplorerMessagesComponent } from './xplorer-messages/xplorer-messages.component';
import { XplorerVerificationComponent } from './xplorer-verification/xplorer-verification.component';
import { GuideVerificationComponent } from './../guide/guide-verification/guide-verification.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XplorerBillingComponent } from './xplorer-billing/xplorer-billing.component';
import { XplorerBookingComponent } from './xplorer-booking/xplorer-booking.component';
import { XplorerFavoriteComponent } from './xplorer-favorite/xplorer-favorite.component';
import { XplorerHistoryComponent } from './xplorer-history/xplorer-history.component';
import { XplorerInviteComponent } from './xplorer-invite/xplorer-invite.component';
import { XplorerPreferenceComponent } from './xplorer-preference/xplorer-preference.component';
import { XplorerProfileComponent } from './xplorer-profile/xplorer-profile.component';
import { XplorerSettingsComponent } from './xplorer-settings/xplorer-settings.component';
import { XplorerDeactivateComponent } from './xplorer-deactivate/xplorer-deactivate.component';

const routes: Routes = [
  { path: '', component: XplorerProfileComponent },
  { path: 'booking', component: XplorerBookingComponent },
  { path: 'history', component: XplorerHistoryComponent },
  { path: 'preferences', component: XplorerPreferenceComponent },
  { path: 'favorites', component: XplorerFavoriteComponent },
  { path: 'profile', component: XplorerProfileComponent },
  { path: 'settings', component: XplorerSettingsComponent },
  { path: 'billing', component: XplorerBillingComponent },
  { path: 'invites', component: XplorerInviteComponent },
  { path: 'message', component: XplorerMessagesComponent },
  { path: 'verification', component: XplorerVerificationComponent },
  { path: 'deactivate', component: XplorerDeactivateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XplorerRoutingModule {}
