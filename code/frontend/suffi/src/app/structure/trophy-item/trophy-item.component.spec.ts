import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophyItemComponent } from './trophy-item.component';

describe('TrophyItemComponent', () => {
  let component: TrophyItemComponent;
  let fixture: ComponentFixture<TrophyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrophyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrophyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
