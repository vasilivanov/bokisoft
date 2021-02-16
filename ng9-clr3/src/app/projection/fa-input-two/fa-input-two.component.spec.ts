import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaInputTwoComponent } from './fa-input-two.component';

describe('FaInputTwoComponent', () => {
  let component: FaInputTwoComponent;
  let fixture: ComponentFixture<FaInputTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaInputTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaInputTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
