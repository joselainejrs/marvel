import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBooksComponent } from './details-books.component';

describe('DetailsBooksComponent', () => {
  let component: DetailsBooksComponent;
  let fixture: ComponentFixture<DetailsBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
