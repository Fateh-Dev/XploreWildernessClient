import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { LoginComponent } from './login/login.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { authenticationRoutingModule } from './authentication-routing.module';
@NgModule({
  declarations: [LoginComponent, SubscribeComponent],
  imports: [CommonModule, authenticationRoutingModule, SharedComponentsModule],
})
export class AuthenticationModule {}
