import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponentComponent } from './komponent.component';

describe('KomponentComponent', () => {
  let component: KomponentComponent;
  let fixture: ComponentFixture<KomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
