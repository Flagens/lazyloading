import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wewnatrz1Component } from './wewnatrz1.component';

describe('Wewnatrz1Component', () => {
  let component: Wewnatrz1Component;
  let fixture: ComponentFixture<Wewnatrz1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Wewnatrz1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Wewnatrz1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
