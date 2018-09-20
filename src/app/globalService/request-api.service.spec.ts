import { TestBed } from '@angular/core/testing';

import { RequestApiService } from './request-api.service';

describe('RequestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestApiService = TestBed.get(RequestApiService);
    expect(service).toBeTruthy();
  });
});
