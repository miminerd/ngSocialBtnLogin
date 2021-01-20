import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSocialLoginButtonsComponent } from './angular-social-login-buttons.component';

describe('AngularSocialLoginButtonsComponent', () => {
  let component: AngularSocialLoginButtonsComponent;
  let fixture: ComponentFixture<AngularSocialLoginButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSocialLoginButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSocialLoginButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
