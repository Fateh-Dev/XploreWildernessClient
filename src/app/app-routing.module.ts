import { AddTripHomeComponent } from './add-trip/add-trip-home/add-trip-home.component';
import { LoginComponent } from './authentication/login/login.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { GuideHomeComponent } from './guide/guide-home/guide-home.component';
import { XplorerHomeComponent } from './xplorer/xplorer-home/xplorer-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribeComponent } from './authentication/subscribe/subscribe.component';

const routes: Routes = [
  {
    path: 'xplorer',
    component: XplorerHomeComponent,
    loadChildren: () =>
      import('./xplorer/xplorer.module').then((m) => m.XplorerModule),
  },
  {
    path: 'guide',
    component: GuideHomeComponent,
    loadChildren: () =>
      import('./guide/guide.module').then((m) => m.GuideModule),
  },
  {
    path: 'add-trip',
    component: AddTripHomeComponent,
    loadChildren: () =>
      import('./add-trip/add-trip.module').then((m) => m.AddTripModule),
  },
  {
    path: 'home',
    component: XplorerHomeComponent,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'login', component: LoginComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
