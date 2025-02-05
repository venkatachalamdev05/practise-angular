import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubjectBComponent } from './behaviour-subject-b.component';

describe('BehaviourSubjectBComponent', () => {
  let component: BehaviourSubjectBComponent;
  let fixture: ComponentFixture<BehaviourSubjectBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviourSubjectBComponent]
    });
    fixture = TestBed.createComponent(BehaviourSubjectBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
