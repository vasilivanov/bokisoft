import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestjsComponent } from './testjs.component';

describe('TestjsComponent', () => {
  let component: TestjsComponent;
  let fixture: ComponentFixture<TestjsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
