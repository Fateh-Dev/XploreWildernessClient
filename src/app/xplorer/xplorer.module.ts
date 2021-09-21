import { MaterialModule } from './../material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XplorerRoutingModule } from './xplorer-routing.module';
import { XplorerHomeComponent } from './xplorer-home/xplorer-home.component';
import { XplorerProfileComponent } from './xplorer-profile/xplorer-profile.component';
import { XplorerSettingsComponent } from './xplorer-settings/xplorer-settings.component';
import { XplorerVerificationComponent } from './xplorer-verification/xplorer-verification.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CostumStepperComponent } from '../shared-components/costum-stepper/costum-stepper.component';
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
    CdkStepperModule,
    XplorerRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})
export class XplorerModule {}
