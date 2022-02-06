import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDadosComponent } from './cadastro-dados.component';

describe('CadastroDadosComponent', () => {
  let component: CadastroDadosComponent;
  let fixture: ComponentFixture<CadastroDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
