import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswodFormComponentComponent } from './passwod-form-component.component';

describe('PasswodFormComponentComponent', () => {
  let component: PasswodFormComponentComponent;
  let fixture: ComponentFixture<PasswodFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswodFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswodFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
