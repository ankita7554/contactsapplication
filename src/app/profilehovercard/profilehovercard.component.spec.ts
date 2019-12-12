import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilehovercardComponent } from './profilehovercard.component';

describe('ProfilehovercardComponent', () => {
  let component: ProfilehovercardComponent;
  let fixture: ComponentFixture<ProfilehovercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilehovercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilehovercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
