import { ItineraryComponent } from './itinerary/itinerary.component';
import { ImagesComponent } from './images/images.component';
import { DropoffComponent } from './dropoff/dropoff.component';
import { PickupComponent } from './pickup/pickup.component';
import { SafetyComponent } from './safety/safety.component';
import { DifficultyComponent } from './difficulty/difficulty.component';
import { LodgingComponent } from './lodging/lodging.component';
import { ActivitiesComponent } from './activities/activities.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ActivitiesComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'lodging', component: LodgingComponent },
  { path: 'difficulty', component: DifficultyComponent },
  { path: 'safety', component: SafetyComponent },
  { path: 'pickup', component: PickupComponent },
  { path: 'dropoff', component: DropoffComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'itinerary', component: ItineraryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTripRoutingModule {}
