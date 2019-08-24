import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChallengesListComponent } from './mychallenges-list.component';

describe('MyChallengesComponent', () => {
  let component: MyChallengesListComponent;
  let fixture: ComponentFixture<MyChallengesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChallengesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChallengesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
