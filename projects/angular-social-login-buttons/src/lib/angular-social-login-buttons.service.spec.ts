import { TestBed } from '@angular/core/testing';

import { AngularSocialLoginButtonsService } from './angular-social-login-buttons.service';

describe('AngularSocialLoginButtonsService', () => {
  let service: AngularSocialLoginButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularSocialLoginButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
