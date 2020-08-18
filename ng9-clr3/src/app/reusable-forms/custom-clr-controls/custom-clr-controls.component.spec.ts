import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomClrControlsComponent } from './custom-clr-controls.component';

describe('CustomClrControlsComponent', () => {
  let component: CustomClrControlsComponent;
  let fixture: ComponentFixture<CustomClrControlsComponent>;

  beforeEach(async(() => {
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
