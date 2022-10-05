import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretHouseComponent } from './secret-house.component';

describe('SecretHouseComponent', () => {
  let component: SecretHouseComponent;
  let fixture: ComponentFixture<SecretHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
