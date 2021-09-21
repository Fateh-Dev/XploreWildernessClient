import { GuideHomeComponent } from './guide/guide-home/guide-home.component';
import { XplorerModule } from './xplorer/xplorer.module';
import { XplorerHomeComponent } from './xplorer/xplorer-home/xplorer-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XplorerProfileComponent } from './xplorer/xplorer-profile/xplorer-profile.component';
import { XplorerSettingsComponent } from './xplorer/xplorer-settings/xplorer-settings.component';
import { XplorerVerificationComponent } from './xplorer/xplorer-verification/xplorer-verification.component';
import { GuideProfileComponent } from './guide/guide-profile/guide-profile.component';
import { GuideSettingsComponent } from './guide/guide-settings/guide-settings.component';
import { GuideVerificationComponent } from './guide/guide-verification/guide-verification.component';

const routes: Routes = [
  {
    path: 'xplorer',
    component: XplorerHomeComponent,
    children: [
      { path: '', component: XplorerProfileComponent },
      { path: 'profile', component: XplorerProfileComponent },
      { path: 'settings', component: XplorerSettingsComponent },
      { path: 'verification', component: XplorerVerificationComponent },
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
    ],
  },
  { path: 'home', component: XplorerHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
