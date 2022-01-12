import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClarityTestComponent } from './clarity-test.component';

describe('ClarityTestComponent', () => {
  let component: ClarityTestComponent;
  let fixture: ComponentFixture<ClarityTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClarityTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
