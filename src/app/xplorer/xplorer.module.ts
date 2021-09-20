import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { XplorerRoutingModule } from './xplorer-routing.module';
import { XplorerHomeComponent } from './xplorer-home/xplorer-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [XplorerHomeComponent],
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
