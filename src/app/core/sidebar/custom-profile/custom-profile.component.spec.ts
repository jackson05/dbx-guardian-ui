import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProfileComponent } from './custom-profile.component';

describe('CustomProfileComponent', () => {
  let component: CustomProfileComponent;
  let fixture: ComponentFixture<CustomProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
