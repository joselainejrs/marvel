import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqBooksComponent } from './hq-books.component';

describe('HqBooksComponent', () => {
  let component: HqBooksComponent;
  let fixture: ComponentFixture<HqBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HqBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HqBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
