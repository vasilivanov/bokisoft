import { TestBed } from '@angular/core/testing';

import { CustomBSimpleTextService } from './custom-b-simple-text.service';

describe('CustomBSimpleTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomBSimpleTextService = TestBed.get(CustomBSimpleTextService);
    expect(service).toBeTruthy();
  });
});
