import { XplorerHomeComponent } from './xplorer/xplorer-home/xplorer-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'xplorer', component: XplorerHomeComponent },
  { path: 'guide', component: XplorerHomeComponent },
  { path: 'home', component: XplorerHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
