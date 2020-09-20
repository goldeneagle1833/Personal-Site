import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeProdjectsComponent } from './code-prodjects.component';

describe('CodeProdjectsComponent', () => {
  let component: CodeProdjectsComponent;
  let fixture: ComponentFixture<CodeProdjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeProdjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeProdjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
