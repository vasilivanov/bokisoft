import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringTemplateComponent } from './string-template.component';

describe('StringTemplateComponent', () => {
  let component: StringTemplateComponent;
  let fixture: ComponentFixture<StringTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
