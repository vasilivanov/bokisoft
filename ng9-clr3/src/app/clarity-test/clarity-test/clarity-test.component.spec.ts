import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarityTestComponent } from './clarity-test.component';

describe('ClarityTestComponent', () => {
  let component: ClarityTestComponent;
  let fixture: ComponentFixture<ClarityTestComponent>;

  beforeEach(async(() => {
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
