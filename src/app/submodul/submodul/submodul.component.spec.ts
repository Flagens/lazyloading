import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmodulComponent } from './submodul.component';

describe('SubmodulComponent', () => {
  let component: SubmodulComponent;
  let fixture: ComponentFixture<SubmodulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmodulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmodulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
