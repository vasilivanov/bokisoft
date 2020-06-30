import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBTextComponent } from './custom-b-text.component';

describe('CustomBTextComponent', () => {
  let component: CustomBTextComponent;
  let fixture: ComponentFixture<CustomBTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
