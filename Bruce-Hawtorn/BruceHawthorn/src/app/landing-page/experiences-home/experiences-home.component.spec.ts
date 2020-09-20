import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesHomeComponent } from './experiences-home.component';

describe('ExperiencesHomeComponent', () => {
  let component: ExperiencesHomeComponent;
  let fixture: ComponentFixture<ExperiencesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
