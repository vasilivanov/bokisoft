import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomClrControlsComponent } from './custom-clr-controls.component';

describe('CustomClrControlsComponent', () => {
  let component: CustomClrControlsComponent;
  let fixture: ComponentFixture<CustomClrControlsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomClrControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomClrControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
