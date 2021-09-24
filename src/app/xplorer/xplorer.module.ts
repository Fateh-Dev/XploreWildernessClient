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
import { XplorerSocialComponent } from './xplorer-social/xplorer-social.component';
@NgModule({
  declarations: [
    XplorerHomeComponent,
    XplorerProfileComponent,
    XplorerSettingsComponent,
    XplorerBookingComponent,
    XplorerHistoryComponent,
    XplorerPreferenceComponent,
    XplorerFavoriteComponent,
    XplorerBillingComponent,
    XplorerInviteComponent,
    XplorerSocialComponent,
  ],
  exports: [XplorerHomeComponent],
  imports: [CommonModule, XplorerRoutingModule, SharedComponentsModule],
})
export class XplorerModule {}
