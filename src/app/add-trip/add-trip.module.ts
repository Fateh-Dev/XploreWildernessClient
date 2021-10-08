import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTripRoutingModule } from './add-trip-routing.module';
import { ActivitiesComponent } from './activities/activities.component';
import { PickupComponent } from './pickup/pickup.component';
import { DropoffComponent } from './dropoff/dropoff.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { LodgingComponent } from './lodging/lodging.component';
import { SafetyComponent } from './safety/safety.component';
import { DifficultyComponent } from './difficulty/difficulty.component';
import { ImagesComponent } from './images/images.component';
import { AddTripHomeComponent } from './add-trip-home/add-trip-home.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  declarations: [
    ActivitiesComponent,
    PickupComponent,
    DropoffComponent,
    ItineraryComponent,
    LodgingComponent,
    SafetyComponent,
    DifficultyComponent,
    ImagesComponent,
    AddTripHomeComponent,
  ],
  imports: [CommonModule, AddTripRoutingModule, SharedComponentsModule],
})
export class AddTripModule {}
