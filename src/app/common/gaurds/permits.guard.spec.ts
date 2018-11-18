import { TestBed, async, inject } from '@angular/core/testing';

import { PermitsGuard } from './permits.guard';

describe('PermitsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermitsGuard]
    });
  });

  it('should ...', inject([PermitsGuard], (guard: PermitsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
