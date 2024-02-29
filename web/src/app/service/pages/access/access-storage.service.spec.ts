import { TestBed } from '@angular/core/testing';
import { AccessStorageService } from './access-storage.service';

describe('AccessService', () => {
  let service: AccessStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
