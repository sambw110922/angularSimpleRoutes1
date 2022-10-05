import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseLeaderComponent } from './house-leader.component';

describe('HouseLeaderComponent', () => {
  let component: HouseLeaderComponent;
  let fixture: ComponentFixture<HouseLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseLeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
