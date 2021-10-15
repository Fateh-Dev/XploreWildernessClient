/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { XplorerService } from './Xplorer.service';

describe('Service: Xplorer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XplorerService]
    });
  });

  it('should ...', inject([XplorerService], (service: XplorerService) => {
    expect(service).toBeTruthy();
  }));
});
