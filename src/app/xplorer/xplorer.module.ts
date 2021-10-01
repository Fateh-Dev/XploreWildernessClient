import { SharedComponentsModule } from './../shared-components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XplorerRoutingModule } from './xplorer-routing.module';
import { XplorerHomeComponent } from './xplorer-home/xplorer-home.component';
import { XplorerProfileComponent } from './xplorer-profile/xplorer-profile.component';
import { XplorerSettingsComponent } from './xplorer-settings/xplorer-settings.component';
import { XplorerBookingComponent } from './xplorer-booking/xplorer-booking.component';
import { XplorerHistoryComponent } from './xplorer-history/xplorer-history.component';
import { XplorerPreferenceComponent } from './xplorer-preference/xplorer-preference.component';
import { XplorerFavoriteComponent } from './xplorer-favorite/xplorer-favorite.component';
import { XplorerBillingComponent } from './xplorer-billing/xplorer-billing.component';
import { XplorerInviteComponent } from './xplorer-invite/xplorer-invite.component';
import { PaymentHistoryTableComponent } from './xplorer-billing/payment-history-table/payment-history-table.component';
import { EmergencyContactComponent } from './xplorer-settings/emergency-contact/emergency-contact.component';
import { XplorerVerificationComponent } from './xplorer-verification/xplorer-verification.component';
import { XplorerDeactivateComponent } from './xplorer-deactivate/xplorer-deactivate.component';
import { XplorerMessagesComponent } from './xplorer-messages/xplorer-messages.component';
import { TripItemComponent } from './xplorer-booking/trip-item/trip-item.component';
@NgModule({
  declarations: [
    XplorerHomeComponent,
    XplorerProfileComponent,
    XplorerSettingsComponent,
    TripItemComponent,
    XplorerBookingComponent,
    XplorerHistoryComponent,
    XplorerPreferenceComponent,
    XplorerFavoriteComponent,
    XplorerBillingComponent,
    XplorerInviteComponent,
    PaymentHistoryTableComponent,
    EmergencyContactComponent,
    XplorerVerificationComponent,
    XplorerDeactivateComponent,
    XplorerMessagesComponent,
  ],
  exports: [XplorerHomeComponent],
  imports: [CommonModule, XplorerRoutingModule, SharedComponentsModule],
})
export class XplorerModule {}
