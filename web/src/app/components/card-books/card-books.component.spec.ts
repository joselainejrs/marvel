import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBooksComponent } from './card-books.component';

describe('CardBooksComponent', () => {
  let component: CardBooksComponent;
  let fixture: ComponentFixture<CardBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
