import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWorkshopComponent } from './first-workshop.component';

describe('FirstWorkshopComponent', () => {
  let component: FirstWorkshopComponent;
  let fixture: ComponentFixture<FirstWorkshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstWorkshopComponent]
    });
    fixture = TestBed.createComponent(FirstWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
