import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardComponent } from './info-card.component';

describe('InfoCardComponent', () => {
  let component: InfoCardComponent;
  let fixture: ComponentFixture<InfoCardComponent>;

  beforeEach(async(() => {
    const mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    mockHttp.get.and.returnValue(of({}));
    TestBed.configureTestingModule({
      declarations: [ InfoCardComponent ],
      providers: [{
        provide: HttpClient,
        useValue: mockHttp
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
