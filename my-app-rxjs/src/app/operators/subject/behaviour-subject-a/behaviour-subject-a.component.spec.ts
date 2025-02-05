import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubjectAComponent } from './behaviour-subject-a.component';

describe('BehaviourSubjectAComponent', () => {
  let component: BehaviourSubjectAComponent;
  let fixture: ComponentFixture<BehaviourSubjectAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviourSubjectAComponent]
    });
    fixture = TestBed.createComponent(BehaviourSubjectAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
