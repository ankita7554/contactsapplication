import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateeventdialogComponent } from './createeventdialog.component';

describe('CreateeventdialogComponent', () => {
  let component: CreateeventdialogComponent;
  let fixture: ComponentFixture<CreateeventdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateeventdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateeventdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
