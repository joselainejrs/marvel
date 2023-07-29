import { TestBed } from '@angular/core/testing';

import { MarvelStorageService } from './marvel-storage.service';

describe('MarvelStorageService', () => {
  let service: MarvelStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
