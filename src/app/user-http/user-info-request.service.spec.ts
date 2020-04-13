import { TestBed } from '@angular/core/testing';

import { UserInfoRequestService } from './user-info-request.service';

describe('UserInfoRequestService', () => {
  let service: UserInfoRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInfoRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
