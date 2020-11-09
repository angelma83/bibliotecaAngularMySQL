import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoBackComponent } from './acceso-back.component';

describe('AccesoBackComponent', () => {
  let component: AccesoBackComponent;
  let fixture: ComponentFixture<AccesoBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
