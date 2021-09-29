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
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from 'angularx-social-login';
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
    SocialLoginModule,
  ],
  exports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '726845249489-ierpr4jmhu5oqdl4l5kp9nngaff5up31.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1489004154795359'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
