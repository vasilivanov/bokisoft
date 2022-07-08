import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReusableFormsLibModule } from '../reusable-forms-lib.module';

import { ProfileFormComponent } from './profile-form.component';

describe('ProfileFormComponentComponent', () => {
  let component: ProfileFormComponent;
  let fixture: ComponentFixture<ProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReusableFormsLibModule],
      declarations: [ ProfileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
