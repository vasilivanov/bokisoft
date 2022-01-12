import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StackViewTestComponent } from './stack-view-test.component';

describe('StackViewTestComponent', () => {
  let component: StackViewTestComponent;
  let fixture: ComponentFixture<StackViewTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StackViewTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackViewTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
