import { TestBed } from '@angular/core/testing';

import { ComicBooksService } from './comic-books.service';

describe('ComicBooksService', () => {
  let service: ComicBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
