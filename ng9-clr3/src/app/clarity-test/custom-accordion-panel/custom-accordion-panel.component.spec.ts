import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAccordionPanelComponent } from './custom-accordion-panel.component';

describe('CustomAccordionPanelComponent', () => {
  let component: CustomAccordionPanelComponent;
  let fixture: ComponentFixture<CustomAccordionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAccordionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAccordionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
