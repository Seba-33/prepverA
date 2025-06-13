import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedComponent } from './rented.component';

describe('RentedComponent', () => {
  let component: RentedComponent;
  let fixture: ComponentFixture<RentedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
