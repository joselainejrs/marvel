import { TestBed } from '@angular/core/testing';

import { RegisterStorageService } from './register-storage.service';

describe('RegisterStorageService', () => {
  let service: RegisterStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
