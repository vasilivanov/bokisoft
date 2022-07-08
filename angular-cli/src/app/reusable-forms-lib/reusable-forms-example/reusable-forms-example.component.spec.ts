import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordFormComponent } from '../passwod-form/password-form.component';
import { ProfileFormComponent } from '../profile-form/profile-form.component';

import { ReusableFormsExampleComponent } from './reusable-forms-example.component';

describe('ReusableFormsExampleComponent', () => {
  let component: ReusableFormsExampleComponent;
  let fixture: ComponentFixture<ReusableFormsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ReusableFormsExampleComponent , PasswordFormComponent, ProfileFormComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableFormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
