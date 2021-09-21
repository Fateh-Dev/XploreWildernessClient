import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { XplorerRoutingModule } from './xplorer-routing.module';
import { XplorerHomeComponent } from './xplorer-home/xplorer-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material-module';
import { XplorerProfileComponent } from './xplorer-profile/xplorer-profile.component';
import { XplorerSettingsComponent } from './xplorer-settings/xplorer-settings.component';
import { XplorerVerificationComponent } from './xplorer-verification/xplorer-verification.component';

@NgModule({
  declarations: [
    XplorerHomeComponent,
    XplorerProfileComponent,
    XplorerSettingsComponent,
    XplorerVerificationComponent,
  ],
  exports: [XplorerHomeComponent],
  imports: [
    CommonModule,
    XplorerRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})
export class XplorerModule {}
