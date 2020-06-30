import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormComponentComponent } from './profile-form-component.component';

describe('ProfileFormComponentComponent', () => {
  let component: ProfileFormComponentComponent;
  let fixture: ComponentFixture<ProfileFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
