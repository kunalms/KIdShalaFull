import { TestBed, inject } from '@angular/core/testing';

import { FetchcategoryService } from './fetchcategory.service';

describe('FetchcategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchcategoryService]
    });
  });

  it('should be created', inject([FetchcategoryService], (service: FetchcategoryService) => {
    expect(service).toBeTruthy();
  }));
});
