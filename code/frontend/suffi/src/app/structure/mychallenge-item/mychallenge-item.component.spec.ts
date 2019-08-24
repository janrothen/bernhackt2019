import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChallengeItemComponent } from './mychallenge-item.component';

describe('MyChallengeItemComponent', () => {
  let component: MyChallengeItemComponent;
  let fixture: ComponentFixture<MyChallengeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChallengeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChallengeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
