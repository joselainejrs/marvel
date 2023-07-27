import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPayComponent } from './card-pay.component';

describe('CardBooksComponent', () => {
  let component: CardPayComponent;
  let fixture: ComponentFixture<CardPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
