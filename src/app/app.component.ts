import { Component } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'XploreWildernessClient';
  constructor(private authService: SocialAuthService) {}

  signOut(): void {
    this.authService.signOut();
  }
}
