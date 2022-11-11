import { TestBed } from '@angular/core/testing';

import { CardBooksService } from './card-books.service';

describe('CardBooksService', () => {
  let service: CardBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
