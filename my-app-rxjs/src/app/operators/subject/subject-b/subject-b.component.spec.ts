import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBComponent } from './subject-b.component';

describe('SubjectBComponent', () => {
  let component: SubjectBComponent;
  let fixture: ComponentFixture<SubjectBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectBComponent]
    });
    fixture = TestBed.createComponent(SubjectBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
