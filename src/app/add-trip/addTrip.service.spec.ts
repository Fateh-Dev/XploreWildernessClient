/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddTripService } from './addTrip.service';

describe('Service: AddTrip', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddTripService]
    });
  });

  it('should ...', inject([AddTripService], (service: AddTripService) => {
    expect(service).toBeTruthy();
  }));
});
