import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wewnatrz2Component } from './wewnatrz2.component';

describe('Wewnatrz2Component', () => {
  let component: Wewnatrz2Component;
  let fixture: ComponentFixture<Wewnatrz2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Wewnatrz2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Wewnatrz2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
