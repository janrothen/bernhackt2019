import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeButtonComponent } from './challenge-button.component';

describe('ChallengeButtonComponent', () => {
  let component: ChallengeButtonComponent;
  let fixture: ComponentFixture<ChallengeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
