import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomControlComponent } from './custom-control.component';

describe('CustomControlComponent', () => {
  let component: CustomControlComponent;
  let fixture: ComponentFixture<CustomControlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
