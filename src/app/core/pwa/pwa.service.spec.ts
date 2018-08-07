/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PwaService } from './pwa.service';

describe('Service: Pwa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PwaService]
    });
  });

  it('should ...', inject([PwaService], (service: PwaService) => {
    expect(service).toBeTruthy();
  }));
});
