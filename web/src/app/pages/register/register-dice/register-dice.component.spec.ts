import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDiceComponent } from './register-dice.component';

describe('RegisterDadosComponent', () => {
  let component: RegisterDiceComponent;
  let fixture: ComponentFixture<RegisterDiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
