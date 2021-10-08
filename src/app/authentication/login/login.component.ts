import { Component, OnInit } from '@angular/core';
// import {
//   FacebookLoginProvider,
//   GoogleLoginProvider,
//   SocialAuthService,
// } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isText = false;
  constructor() {}
  // constructor(private authService: SocialAuthService) {}
  signUpButton = document.getElementById('signUp');
  signInButton = document.getElementById('signIn');
  container = document.getElementById('container');

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  // refreshToken(): void {
  //   this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  // }
  ngOnInit() {}
}
