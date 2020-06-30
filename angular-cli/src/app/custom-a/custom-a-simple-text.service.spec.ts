import { TestBed } from '@angular/core/testing';

import { CustomASimpleTextService } from './custom-a-simple-text.service';

describe('CustomASimpleTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomASimpleTextService = TestBed.get(CustomASimpleTextService);
    expect(service).toBeTruthy();
  });
});
