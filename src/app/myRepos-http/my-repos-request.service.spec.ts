import { TestBed } from '@angular/core/testing';

import { MyReposRequestService } from './my-repos-request.service';

describe('MyReposRequestService', () => {
  let service: MyReposRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyReposRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
