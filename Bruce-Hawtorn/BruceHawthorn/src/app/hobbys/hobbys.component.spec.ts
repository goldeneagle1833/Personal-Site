import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbysComponent } from './hobbys.component';

describe('HobbysComponent', () => {
  let component: HobbysComponent;
  let fixture: ComponentFixture<HobbysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
