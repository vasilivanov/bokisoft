
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { SimpleTextService, SIMPLE_TEXT_SERVICE_TOKEN } from '../interfaces/simple-test.interface';

import { SimpleTextComponent } from './simple-text.component';

describe('SimpleTextComponent', () => {
  let component: SimpleTextComponent;
  let fixture: ComponentFixture<SimpleTextComponent>;

  beforeEach(async(() => {

    const textService = jasmine.createSpyObj('textService', ['getText']);
    TestBed.configureTestingModule({
      declarations: [ SimpleTextComponent ],
      providers: [{
        provide: SIMPLE_TEXT_SERVICE_TOKEN,
        useValue: textService
      }]
    })
    .compileComponents();

  }));

  beforeEach(inject([SIMPLE_TEXT_SERVICE_TOKEN], (textService: SimpleTextService) => {
    fixture = TestBed.createComponent(SimpleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
