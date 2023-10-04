import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssWorkshopComponent } from './css-workshop.component';

describe('CssWorkshopComponent', () => {
  let component: CssWorkshopComponent;
  let fixture: ComponentFixture<CssWorkshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssWorkshopComponent]
    });
    fixture = TestBed.createComponent(CssWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
