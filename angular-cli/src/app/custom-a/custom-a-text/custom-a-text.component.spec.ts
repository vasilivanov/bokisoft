import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomATextComponent } from './custom-a-text.component';

describe('CustomATextComponent', () => {
  let component: CustomATextComponent;
  let fixture: ComponentFixture<CustomATextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomATextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomATextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
