import { HomeModule } from './home/home.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { XplorerModule } from './xplorer/xplorer.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared-components/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GuideModule } from './guide/guide.module';
import { NotFound404Component } from './not-found404/not-found404.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AppComponent, NotFound404Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    AuthenticationModule,
    XplorerModule,
    GuideModule,
    HomeModule,
  ],
  exports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
