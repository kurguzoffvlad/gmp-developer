import { TestBed } from '@angular/core/testing';

import { GmpDeveloperService } from './gmp-developer.service';

describe('GmpDeveloperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpDeveloperService = TestBed.get(GmpDeveloperService);
    expect(service).toBeTruthy();
  });
});
